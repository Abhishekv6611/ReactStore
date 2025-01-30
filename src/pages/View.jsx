import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";

const View = () => {


  const dispatch=useDispatch()
  const userWishlsit=useSelector(state=>state.wishlistReducer)



  const [product,setProduct]=useState({})
const params=useParams()
console.log(params);
 
useEffect(()=>{
  if(sessionStorage.getItem('products')){
    const data= JSON.parse(sessionStorage.getItem('products'))
  setProduct(data.find(product=>product.id==params.id)
  );

  }
},[])

 const handleWishlist=()=>{
  const existingProduct=userWishlsit?.find(item=>item?.id==params.id)
  if(existingProduct){
    alert('Product already in wishlist')
  }
  else{
    dispatch(addToWishlist(product))
    alert('Product added to wishlist')
  }

 }



 const starFunction=(rating)=>{
  let stars=[]
  for(let i=0;i<rating;i++){
    stars.push(<i className="fa-solid fa-star text-yellow-500"></i>)
  }
  return stars
 }

return (
    <>
      <Header/>
      <div className="flex flex-col mx-5 ">
        <div className="grid grid-cols-2 items-center h-screen">
          <img className="ms-40" width={'350px'} height={'250px'} src={product?.thumbnail} alt="pic" />
           
           <div>
            <h3 className="font-bold">PID: {product?.id}</h3>
            <h1 className="text-5xl font-bold">{product?.title}</h1>
            <h4 className="font-bold text-red-600 text-2xl">${product?.price}</h4>
            <h4>Brand : {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <p>
              <span className="font-bold">Description</span> : {product?.description}
            </p>
            <h1 className="font-bold">Client review :</h1>
            {
              product?.reviews?.length>0?
              product?.reviews?.map(item=>(
                <>
                <div key={item?.date} className="flex">
                  <h3 className="font-semibold">{item?.reviewerName}</h3>
                  <p>: {item?.comment}</p>
                  <div className="ml-2">
                    {starFunction(item?.rating)}
                    </div>
                </div>
                </>
              )):<p>No review found</p>
            }
            <div className="flex gap-5 mt-5">
        <button onClick={handleWishlist} className="bg-blue-600 rounded text-white p-2">Add to Wishlist</button>
        <button className="bg-green-600 rounded text-white p-2">Add to Cart</button>
            </div>
           </div>
        </div>

      </div>
    </>
  )
}

export default View
