import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

export const PagePostId = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchingPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchingComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })
    console.log(comments)
    useEffect(() => {
        fetchingPostById()
        fetchingComments()
    }, [])
    return (
        <>
            Страница поста

            {
                isLoading
                    ? <Loader/>
                    : <div>
                        <div>{post.id}. {post.title}</div>
                    </div>
            }
            <h1>Комментарии</h1>
            {
                isComLoading
                    ? <Loader/>
                    : <div>
                        {
                            comments.map(comments =>
                                <div key={comments.id}>
                                    <h3>{comments.id}. {comments.name}</h3>
                                    <div>{comments.body}</div>
                                    <div>{comments.email}</div>
                                </div>
                            )
                        }
                    </div>
            }
        </>
    );
};

