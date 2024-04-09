import React, { useEffect, useState } from 'react'
import Header from './Header'
import Product from './Product';
import ShimmerEffect from './ShimmerEffect';

const Home = () => {
const [data,setData] = useState([]);
useEffect(()=>{
   const allFetchedData = fetch("https://api.escuelajs.co/api/v1/products").then(res=>res.json()).then(data =>setData(data));
  //  console.log(data)

},[])
// adding shimmerEffect
 if(data.length==0){
  return (
    <>
    {Array.from({length:10}).map((value,index)=>(
      <div id="shimmer" key={index}>
        <ShimmerEffect />
       </div>
    ))}
      
    </>
  )
 }
  return (
    <>
        <section id="productList">
            {data.map((value,index)=>(
                <Product key={value.id} dataToSend={{title:value.title,price:value.price,description:value.description,image:value.category.image}}/>
            ))}
        </section>
    </>
  )
}

export default Home
