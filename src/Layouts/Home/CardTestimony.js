import Image from "next/image";

export default function CardTestimony() {

    return(
        <div className="col-4">
            <div className="card p-3" style={{width: "20rem"}}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex ">
                    <Image
                        className="rounded-circle" 
                        src="/img/contoh.png"
                        width={50}
                        height={50}
                    />
                    <div className="d-flex flex-column justify-content-center">
                        <h4>Viezh Robert</h4>
                        <p>Warsaw, Poland</p>
                    </div>
                    </div>
                    <div className="d-flex">
                        <p>4.5</p>
                    </div>

                </div>
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the 
                card title and make up the bulk of the cards content.</p>
                </div>
            </div>
        </div>
    )
}