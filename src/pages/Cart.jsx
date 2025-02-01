import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {  decrementQuality, emptyCart, incrementQuantity, removeCartItem } from "../redux/slices/cartSlice"

const Cart = () => {
  const[cartTotal,setCartTotal]=useState(0)
  const userCart=useSelector(state=>state.CartReducer)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  useEffect(()=>{
  if(userCart?.length>0){
    setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
  }
  },[userCart])

  const handleDecrementQuality=(product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuality(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  
 const Checkout=()=>{
  dispatch(emptyCart())
  alert("Order Conformed....Thank you")
  navigate('/')
 }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className="px-5">
       {
  userCart?.length>0?
    <>
        <h2 className="text-6xl font-bold text-blue-600">Cart summary</h2>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="col-span-2 border rounded p-5 shadow">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <td className="font-semibold">#</td>
                  <td className="font-semibold">Name</td>
                  <td className="font-semibold">Image</td>
                  <td className="font-semibold">Quantity</td>
                  <td className="font-semibold">Price</td>
                  <td className="font-semibold">...</td>
                </tr>
              </thead>
              <tbody>
               {
                userCart?.map((product,index)=>(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{product?.title}</td>
                  <td>
                  <img width={'70px'} height={'70px'} src={product?.images} alt="cat-img" />
                  </td>
                  <td>
                    <div className="flex">
                      <button onClick={()=>handleDecrementQuality(product)}  className="font-bold">-</button>
                      <input style={{width:'40px'}} className="border rounded p-1 mx-2" value={product?.quantity} type="text" />
                      <button onClick={()=>dispatch(incrementQuantity(product.id))} className="font-bold">+</button>
                    </div>
                  </td>
                   <td>{product?.totalPrice}</td>
                   <td><button onClick={()=>dispatch(removeCartItem(product.id))} className="text-red-500" ><i className="fa-solid fa-trash"></i></button></td>
                </tr>
                ))
               }
              </tbody>
            </table>
            <div className="float-right mt-5">
              <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
              <Link to={'/'} className="bg-blue-500 ms-3 rounded p-2 text-white ">Shop More</Link>
            </div>
          </div>
          <div className="col-span-1">
             <div className="border rounded shadow p-5">
              <h2 className="text-2xl font-bold">Total Amount: <span className="text-red-600">{cartTotal}</span></h2>
              <hr/>
              <button onClick={Checkout} className="bg-green-500 rounded p-2 text-white w-full mt-4">Check out</button>
             </div>
          </div>
        </div>
        </>

:
   <div className="text-center font-bold text-red-500 ">
    Your Cart is Empty
   </div>

       }
      </div>
    </>
  )
}

export default Cart
