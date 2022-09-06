import CardTestimony from "./CardTestimony";

export default function CustomerHome() {

    return(
        <section className="text-center mt-2">
            <h2 className="mb-2">Loved by Thousands of Happy Customer</h2>
            <p className="mb-5">These are the stories of our customers who 
            have visited us with great pleasure.</p>
            <div className="row justify-content-center mb-2">
                <CardTestimony />
            </div>
        </section>
    )
} 