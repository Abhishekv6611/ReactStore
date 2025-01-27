import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlice'
function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(fetchProducts())
  },[])
  return (
    <>
      <Header insideHome={true}/>
      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
           <div className='rounded border p-2 shadow-lg'>
               <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMvbqwTS7VqJip_JtSRSfTjLUNk-Y1Fz6QtnJakxsh2R74TBDmGL89EVN15GjA7YEbCVHyRZAolWCIECxZKCw4EmHOJjBHBGFfHHdbYSQvSRJBCOsevE30BJlnXpcN&usqp=CAc" width={'100%'} height={'200px'}  alt="" />
             <div className='text-center'>
               <h3 className='text-xl font-bold'>Title</h3>
               <Link to={'/:id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>
                  View more
               </Link>
             </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Home
