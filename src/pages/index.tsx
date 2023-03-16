import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import HeroBlock from 'containers/hero-block';
import Products from 'containers/products';
import CallToAction from 'containers/call-to-action';
import HowItWorks from 'containers/how-it-works';
import { useRefScroll } from 'helpers/use-ref-scroll';
import { useSearch } from 'contexts/search/use-search';
import axios from 'axios';



export default function Home({ products }) {
  const [productz,setProductz]=useState([]);
  const fetchData = async (URL) => {
    try {
      await axios({
        method: 'GET',
        url: URL,
      }).then((res) => {
        console.log(res.data);
        setProductz(res.data);
      });
    } 
    catch (err) {
      console.log(err)
    }
  }
  const URL = "https://web-production-4516.up.railway.app/api/medicines/";
  useEffect(()=>{
    fetchData(URL);
  },[])
//   const productz = [
//     {
//     "id":"1",
//     "name" :"xyz-medicine",
//     "image" : "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80",
//     "description" : "none",
//     "price" : "200",
//     "manufacturer" : "Shah medics",
//     "type" : "tooth-ace",
//     "quantity" : "2",
//     "dosage": "morning",
//     "substance" : "calcium"
//     },
//     {
//     "id":"1",
//     "name" :"xyz-medicine",
//     "image" : "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80",
//     "description" : "none",
//     "price" : "200",
//     "manufacturer" : "Shah medics",
//     "type" : "tooth-ace",
//     "quantity" : "2",
//     "dosage": "morning",
//     "substance" : "calcium"
//     },
//     {
//     "id":"1",
//     "name" :"xyz-medicine",
//     "image" : "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80",
//     "description" : "none",
//     "price" : "200",
//     "manufacturer" : "Shah medics",
//     "type" : "tooth-ace",
//     "quantity" : "2",
//     "dosage": "morning",
//     "substance" : "calcium"
//     },
//     {
//     "id":"1",
//     "name" :"xyz-medicine",
//     "image" : "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80",
//     "description" : "none",
//     "price" : "200",
//     "manufacturer" : "Shah medics",
//     "type" : "tooth-ace",
//     "quantity" : "2",
//     "dosage": "morning",
//     "substance" : "calcium"
//     },
//     {
//     "id":"1",
//     "name" :"yz-medicine",
//     "image" : "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2839&q=80",
//     "description" : "none",
//     "price" : "200",
//     "manufacturer" : "Shah medics",
//     "type" : "tooth-ace",
//     "quantity" : "2",
//     "dosage": "morning",
//     "substance" : "calcium"
//     }
// ];
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const { searchTerm } = useSearch();
  useEffect(() => {
    if (searchTerm) return scroll();
  }, [searchTerm]);

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>Medi-Raksha</title>
      </Head>

      <HeroBlock />
      {/* <HowItWorks /> */}
      <Products items={productz} ref={elRef} />
      <CallToAction />
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const products = await getProducts();
//   return {
//     props: {
//       products,
//     },
//   };
// }


// export async function getServerSideProps() {
//   const products = await getProducts();
//   const filteredProducts = products.filter(product => product.quantity !== undefined);

//   return {
//     props: {
//       products: filteredProducts,
//     },
//   };
// }  

