import Image from "next/image"

export default function Section1() {

    return(
    <section>
        <div className="row justify-content-center p-3">
            <div className="col-5">
                <Image src="/img/teamwork.png"
                width={500}
                height={450}
                alt='teamwork'
                 />
            </div>
            <div className="col-5">
                <div className="d-flex flex-column justify-content-center" style={{height: "100%"}}>
                    <h2 className="mb-2">We Provide Good Coffee and Healthy Meals</h2>
                    <p className="mb-2">You can explore the menu that we provide with fun 
                    and have their own taste and make your day better.</p>
                    <ul >
                        <li className="mb-2">High quality beans</li>
                        <li className="mb-2">Healthy meals, you can request the ingredients</li>
                        <li className="mb-2">Chat with our staff to get better experience for ordering</li>
                        <li className="mb-2">Free member card with a minimum purchase of IDR 200.000.</li>
                    </ul>
                </div>
            </div>
        </div>    
    </section>
    )
}