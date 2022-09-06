import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useGetUsers(id) {
    const {data, error} = useSWR(`${process.env.URL_BE}api/v1/users/${id}`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}