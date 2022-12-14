import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";

export function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetching, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(() => {
        fetching()
    }, [page, limit])

    const removePost = (post) => {
        setPosts(posts.filter(p => {
            return p.id !== post.id
        }))
    }

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className="App">
            <MyButton
                style={{marginTop: '30px'}}
                onClick={() => setModal(true)}
            >
                Создать пост
            </MyButton>
            <MyModal modal={modal} setModal={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                error &&
                <h1>Произошла ошибка</h1>
            }
            <MySelect
            value={limit}
            onChange={value => setLimit(value)}
            defaultValue="Кол-во эл на странице"
            options={[
                {value: 5, name: 5},
                {value: 10, name: 10},
                {value: 25, name: 25},
                {value: -1, name: "All"},
            ]}
            />
            {
                isLoading
                    ? null
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты JS'/>
            }
            <Pagination
                totalPages={totalPages}
                changePage={changePage}
                page={page}
            />
        </div>
    );
}

