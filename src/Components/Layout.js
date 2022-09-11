import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

export default function Layout({children, auth}) {

    return(<>
    <Meta />
    {auth ?  null : <Navbar /> }
        {children}
     {auth ? null : <Footer />}   
    </>
    )
}