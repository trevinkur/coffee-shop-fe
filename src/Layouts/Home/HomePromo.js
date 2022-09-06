export default function HomePromo() {

    return(
    <section className="p-4 d-flex justify-content-center">
        <div className="container row justify-content-between m-3 border p-5 shadow" style={{width: "80%"}}>
            <div className="col-6">
                <h2 className="mb-3">Check our promo today!</h2>
                <p>Lets see the deals and pick yours!</p>
            </div>
            <div className="col-4 d-flex align-items-center">
                <button className="btn btn-primary py-2 px-5">See Promo</button>
            </div>
        </div>
    </section>)
}