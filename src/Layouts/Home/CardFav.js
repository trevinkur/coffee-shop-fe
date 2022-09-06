import Image from "next/image";

export default function CardFav() {

    return(
        <div className="card p-3" style={{width: "18rem"}}>
        <div className="text-center">
        <Image
            className="rounded-circle" 
            src='/img/contoh.png'
            width={100}
            height={100}
            alt="img"
        />
        </div>
        
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title mb-3">Card title</h5>
          <p className="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}