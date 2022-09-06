import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Layout from '../Components/Layout'
import Meta from '../Components/Meta'
import CustomerHome from '../Layouts/Home/CustomerHome'
import HomeFav from '../Layouts/Home/HomeFav'
import HomePromo from '../Layouts/Home/HomePromo'
import OurPartner from '../Layouts/Home/OurPartner'
import OurStore from '../Layouts/Home/OurStore'
import Section1 from '../Layouts/Home/section1'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return <Layout>
    <Meta />
    <Header />
    <Section1 />
    <HomeFav />
    <OurStore />
    <OurPartner />
    <CustomerHome />
    <HomePromo />
  </Layout>
}
