import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { searchProduct } from "../redux/slices/productSlice"

const Header = ({insideHome}) => {
  const userCart=useSelector(state=>state.CartReducer)
  const userWishlsit=useSelector(state=>state.wishlistReducer)
 const dispatch=useDispatch()
  return (
    <nav className="flex bg-violet-600 fixed w-full p-5 text-white">
      <Link className="text-2xl font-bold" to={'/'}>
      <i className="fa-solid fa-truck-fast me-2">Daily Cart</i>
      </Link>
      <ul className="flex-1 text-right">
        {
          insideHome&&(
            <li className="list-none inline-block px-5"><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}  type="text" style={{width:'300px'}} className="rounded p-2 text-black"  placeholder="search products Here!!"/></li>
          )

        }
       <Link to={'/whishlist'}>
        <li className="list-none inline-block px-5"><i className="fa-solid fa-heart text-red-600"></i>Wishlist <span className="bg-black text-white rounded p-1">{userWishlsit?.length}</span></li>
       </Link>
       <Link to={'/cart'}>
        <li className="list-none inline-block px-5"><i className="fa-solid fa-cart-plus text-green-600"></i>Cart <span className="bg-black text-white rounded p-1">{userCart?.length}</span></li>
       </Link>
      </ul>
    </nav>
  )
}

export default Header
