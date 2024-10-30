import axios from "axios";
import {NAVBAR_MENUS_PATH} from "../configs/paths";


export const getMenus = async () => {
    try {
        const response = await axios.get(NAVBAR_MENUS_PATH);
        return response.data.sort((a, b) => a.sortOrder - b.sortOrder);
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const postNavbarMenus = async (data) => {
    try {
        await axios.post(NAVBAR_MENUS_PATH, data);
    } catch (error) {
        console.error(error);
    }
}