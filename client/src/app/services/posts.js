import axios from "axios";
import {POSTS_PATH} from "../configs/paths";


export const getPosts = async () => {
    try {
        const response = await axios.get(POSTS_PATH);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postPost = async (data) => {
    try {
        const response = await axios.post(POSTS_PATH, data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const putPost = async (id, data) => {
    try {
        const response = await axios.put(`${POSTS_PATH}/${id}`, data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getSinglePost = async (id) => {
    try {
        const response = await axios.get(`${POSTS_PATH}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}