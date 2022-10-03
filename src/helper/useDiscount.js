export function discount(coupon, orders) {
    
    if(orders?.data?.find((item) => item.product.toLowerCase() === coupon?.condition_coupon?.toLowerCase())) {
        return orders?.data?.map((item) => {
            if(item.product.toLowerCase() === coupon.product.toLowerCase() ) {
                let totalDicount = item.total_price * coupon.discount/100
                return {
                    discount: totalDicount,
                    product: item.product
                }
            }
        })
    } else {
        return []
    }
    
    
}