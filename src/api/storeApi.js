import axiosClient from "./axiosClient";


const storeApi={
    getProducts:(params)=>{
        return axiosClient.get("products/",params)
    },
     getProduct: async (id)=>{
        return await axiosClient.get("products/"+id)
    },
    getCategories:()=>{
        return axiosClient.get("products/categories")
    }
}

export default storeApi;