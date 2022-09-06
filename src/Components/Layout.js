import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children, auth}) {

    return(<>
    {auth ?  null : <Navbar /> }
        {children}
     {auth ? null : <Footer />}   
    </>
    )
}