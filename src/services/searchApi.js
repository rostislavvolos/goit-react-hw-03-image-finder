import axios from "axios";


const key = '24516187-6a7424301f95b0f6b37c73776';


const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params: {
        key: key
    }
});



const searchPictures = (page = 1, q)=> {
    return instance.get("/", {
        params: {
            page,
            q
        }
    })
}

export const productsApi = {
    searchPictures
}
