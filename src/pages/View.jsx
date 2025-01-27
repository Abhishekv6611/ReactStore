import Header from "../components/Header"

const View = () => {
  return (
    <>
      <Header/>
      <div className="flex flex-col mx-5 ">
        <div className="grid grid-cols-2 items-center h-screen">
          <img className="ms-40" width={'350px'} height={'250px'} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMvbqwTS7VqJip_JtSRSfTjLUNk-Y1Fz6QtnJakxsh2R74TBDmGL89EVN15GjA7YEbCVHyRZAolWCIECxZKCw4EmHOJjBHBGFfHHdbYSQvSRJBCOsevE30BJlnXpcN&usqp=CAc" alt="pic" />
           
           <div>
            <h3 className="font-bold">PID: id</h3>
            <h1 className="text-5xl font-bold">Title</h1>
            <h4 className="font-bold text-red-600 text-2xl">$260</h4>
            <h4>Brand : brand</h4>
            <h4>Category : ctegory</h4>
            <p>
              <span className="font-bold">Description</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam assumenda, debitis, dolore labore ab perferendis recusandae atque ex ipsa ducimus nisi repellat cum tempora pariatur quos nihil. Tempore, beatae!
            </p>
            <div className="flex gap-5 mt-5">
        <button className="bg-blue-600 rounded text-white p-2">Add to Wishlist</button>
        <button className="bg-green-600 rounded text-white p-2">Add to Cart</button>
            </div>
           </div>
        </div>

      </div>
    </>
  )
}

export default View
