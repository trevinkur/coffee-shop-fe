import { apiSlice } from "../api/apiSlice"



export const productsApiSlice =  apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => "/products"
        }),
        getProductsId: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})

export const { 
    useGetProductsQuery,
    useGetProductsIdQuery,
    util: {getRunningOperationPromise}
} = productsApiSlice

export const { 
    getProducts,
    getProductsId
} = productsApiSlice.endpoints