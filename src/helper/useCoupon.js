import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useGetCoupon(code) {
    const {data, error} = useSWR(`${process.env.URL_BE}api/v1/coupon/${code}`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}