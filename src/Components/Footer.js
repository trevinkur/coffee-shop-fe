import Image from "next/image"

export default function Footer() {

    return(
    <footer className="container-fluid p-5">
        <div className="row justify-content-between">
            <div className="col-6">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                    <Image src='/img/logo.svg' 
                    width={30}
                    height={33}
                    alt={'logo'}
                    />
                    </div>
                    <h3>Coffee Shop</h3>
                </div>
                <p>Coffee Shop is a store that sells some good meals, 
                and especially coffee. We provide high quality beans</p>
            </div>
            <div className="col-4">
                <div className="d-flex justify-content-around">
                    <div className="">
                        <h3>Product</h3>
                        <p className="mb-2">Product</p>
                        <p className="mb-2">Product</p>
                        <p className="mb-2">Product</p>
                        <p className="mb-2">Product</p>
                    </div>
                    <div>
                        <h3>Engage</h3>
                        <p className="mb-2">Product</p>
                        <p className="mb-2">Product</p>
                        <p className="mb-2">Product</p>
                        <p className="mb-2">Product</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}