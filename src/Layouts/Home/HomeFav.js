import CardFav from "./CardFav";

export default function HomeFav() {

    return(
        <section className="text-center">
            <h2 className="mb-3">Here is Peoples Favorite</h2>
            <p className="mb-5">Lets choose and have a bit taste of 
            poeples favorite. It might be yours too!</p>
            <div className="row justify-content-center mb-3">
                <CardFav />
            </div>

        </section>
    )
}