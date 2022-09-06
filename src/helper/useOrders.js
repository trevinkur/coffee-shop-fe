import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useGetOrders(id,status) {
    const {data, error} = useSWR(`${process.env.URL_BE}api/v1/orders/${id}?status=${status}`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}