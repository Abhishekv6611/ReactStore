import { Link } from "react-router-dom"
import Header from "../components/Header"

const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className="px-5">
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
                <tr>
                  <td>1</td>
                  <td>Product name</td>
                  <td>
                  <img width={'70px'} height={'70px'} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMvbqwTS7VqJip_JtSRSfTjLUNk-Y1Fz6QtnJakxsh2R74TBDmGL89EVN15GjA7YEbCVHyRZAolWCIECxZKCw4EmHOJjBHBGFfHHdbYSQvSRJBCOsevE30BJlnXpcN&usqp=CAc" alt="cat-img" />
                  </td>
                  <td>
                    <div className="flex">
                      <button className="font-bold">-</button>
                      <input style={{width:'40px'}} className="border rounded p-1 mx-2" value={1} type="text" />
                      <button className="font-bold">+</button>
                    </div>
                  </td>
                   <td>$30</td>
                   <td><button className="text-red-500" ><i className="fa-solid fa-trash"></i></button></td>
                </tr>
              </tbody>
            </table>
            <div className="float-right mt-5">
              <button className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
              <Link to={'/'} className="bg-blue-500 ms-3 rounded p-2 text-white ">Shop More</Link>
            </div>
          </div>
          <div className="col-span-1">
             <div className="border rounded shadow p-5">
              <h2 className="text-2xl font-bold">Total Amount: <span className="text-red-600">$340</span></h2>
              <hr/>
              <button className="bg-green-500 rounded p-2 text-white w-full mt-4">Check out</button>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
