import {  useSelector } from "react-redux"
import Header from "../components/Header"

const Wishlist = () => {
  const userWishlsit=useSelector(state=>state.wishlistReducer)

  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className="px-5">
          {
            userWishlsit.length>0?
          <>
            <h1 className="text-4xl font-bold text-red-600 mb-4">My Wishlist</h1>
            <div className='grid grid-cols-4 gap-4'>
          {
            userWishlsit.map(product=>(
              <div key={product.id} className='rounded border p-2 shadow-lg'>
              <img src={product.images} width={'100%'} height={'200px'}  alt="" />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>{product.title}</h3>
               <div className="flex justify-evenly mt-3">
                 <button className="text-xl"><li className="fa-solid fa-heart-circle-xmark text-red-600"></li></button>
                 <button className="text-xl"><li className="fa-solid fa-cart-plus text-green-600"></li></button>
               </div>
            </div>
          </div>
            ))
          }
        </div>
          </>
         :
        <div className='text-center text-lg font-bold text-red-600'>Wishlist is empty</div>
            
          }
    </div>
      
    </>
  )
}

export default Wishlist
