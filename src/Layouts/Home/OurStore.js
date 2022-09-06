import Image from "next/image";

export default function OurStore() {

    return(
    <section>
        <div className="d-flex flex-column align-items-center mt-2 mb-2">
        <h2>Visit Our Store in the Spot  </h2>
        <h2 className="mb-3">on the map Below</h2>
        <p className="mb-5">See our store in every city on the spot and spen 
        your good day there. See you soon!</p>
        <Image 
            src="/img/global.png"
            width={1000}
            height={530}
            alt="global"
        />
        </div>
    </section>
    )
}