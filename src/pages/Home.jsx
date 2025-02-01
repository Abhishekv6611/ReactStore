import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../redux/slices/productSlice'
function Home() {
  const dispatch=useDispatch()

   const {allProducts,loading,errorMsg}=useSelector(state=>state.productReducer)
console.log(allProducts,loading,errorMsg);

 const[currentPage,setCurrentPage]=useState(1)
 const productPages=8
 const totalPages=Math.ceil(allProducts?.length/productPages)
 const currentPageProductLastIndex=currentPage*productPages
 const currentPageProductFirstIndex=currentPageProductLastIndex-productPages
 const visibleAllProducts=allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  useEffect(()=>{
      dispatch(fetchProducts())
  },[])

  const navigateToNextPage=()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToPreviewsPage=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
      <Header insideHome={true}/>
      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
       {
        loading? 
        <div className='flex justify-center items-center my-1 text-lg'>
          <img width={'300px'} height={'230px'} src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952t3vzsms47h3xpv3luy2gjjcwzomqepth7olhidlw&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
            Loading.....
        </div>
        :
        <>
         <div className='grid grid-cols-4 gap-4'>
         {
          allProducts.length>0?
          visibleAllProducts.map((product,index)=>(
            <div key={index} className='rounded border p-2 shadow-lg'>
          <img src={product.thumbnail} width={'100%'} height={'200px'}  alt="product-image" />
        <div className='text-center'>
          <h3 className='text-xl font-bold'>{product.title}</h3>
          <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>
             View more
          </Link>
        </div>
      </div>
          ))
      :  
      <div className='text-center text-lg font-bold text-red-600'>
        Product not found
      </div>
         }
        </div>
        </>
       }
      </div>
      <div className='text-2xl text-center font-bold mt-20'>
        <span onClick={navigateToPreviewsPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
        <span>{currentPage} of {totalPages}</span>
        <span onClick={navigateToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>
       
      </div>
    </>
  )
}

export default Home
