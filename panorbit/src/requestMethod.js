import axios from "axios";

const BASE_URL = "https://panorbit.in/api/";

export const userRequest = axios.create({
    baseURL:BASE_URL,
})