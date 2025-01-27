import Header from "../components/Header"

const Wishlist = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className="px-5">
          <>
            <h1 className="text-4xl font-bold text-red-600 mb-4">My Wishlist</h1>
            <div className='grid grid-cols-4 gap-4'>
           <div className='rounded border p-2 shadow-lg'>
               <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMvbqwTS7VqJip_JtSRSfTjLUNk-Y1Fz6QtnJakxsh2R74TBDmGL89EVN15GjA7YEbCVHyRZAolWCIECxZKCw4EmHOJjBHBGFfHHdbYSQvSRJBCOsevE30BJlnXpcN&usqp=CAc" width={'100%'} height={'200px'}  alt="" />
             <div className='text-center'>
               <h3 className='text-xl font-bold'>Title</h3>
                <div className="flex justify-evenly mt-3">
                  <button className="text-xl"><li className="fa-solid fa-heart-circle-xmark text-red-600"></li></button>
                  <button className="text-xl"><li className="fa-solid fa-cart-plus text-green-600"></li></button>
                </div>
             </div>
           </div>
        </div>
          </>
    </div>
      
    </>
  )
}

export default Wishlist
