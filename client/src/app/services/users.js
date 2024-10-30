import axios from "axios";
import {ROLES_PATH, USER_ROLES_PATH, USERS_PATH} from "../configs/paths";

export const createUser = async (userData) => {
    try {
        const response = await axios.post(USERS_PATH, userData);
    } catch (error) {
        console.error(error);
    }
};

export const getUsers = async () => {
    try {
        const response = await axios.get(USERS_PATH);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getRoles = async () => {
    try {
        const response = await axios.get(ROLES_PATH);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const createUserRole = async (roleData) => {
    try {
        await axios.post(USER_ROLES_PATH, roleData);
    } catch (error) {
        console.error(error);
        throw error;
    }
}