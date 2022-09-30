import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";




export default function Layout({children,title}){
    return(
<>

    <Head>
        <title>{title}</title>

    </Head>

<Header/>
{children}
<Footer/>

</>
    )
}