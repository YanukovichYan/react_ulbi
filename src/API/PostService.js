import axios from "axios";

export default class PostService {

    static async getAll(limit, page) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page,
                }
            })
            return response
        } catch (e) {
            console.log(e.message)
        }
    }

    static async getById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}