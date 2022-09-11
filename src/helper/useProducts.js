import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useGetProducts({search='', category}) {
    const {data, error} = useSWR(`${process.env.URL_BE}api/v1/products?search=${search}${category ? `&category=${category}`: ''}&limit=15`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
} 