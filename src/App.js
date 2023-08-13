import "./App.css";
import { useState, useEffect } from "react";
import CategoriesPlaceholder from "./palceholders/CategoriesPlaceholder";
import Category from "./Category";
function App() {
  // let tempCategories = [
  //   {
  //     _id: "64bcffae81433a26307ec7de",
  //     title: "electronics",
  //   },
  //   {
  //     _id: "64bcffc181433a26307ec7df",
  //     title: "jewelery",
  //   },
  //   {
  //     _id: "64bcffd581433a26307ec7e0",
  //     title: "men's clothing",
  //   },
  //   {
  //     _id: "64bcffe581433a26307ec7e1",
  //     title: "women's clothing",
  //   },
  // ];

  // const [categories, setCategories] = useState(tempCategories);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCategories() {

    // Todo: Error handling i.e. try catch , if else whatever you need

    setLoading(true);
    // http://127.0.0.1:5000/categories
    let request = await fetch("https://fakestoreapi-production-80ed.up.railway.app/categories");
    let tempCategories = await request.json();
    setCategories(tempCategories);
    setLoading(false);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  // if (loading) {
  //   return (
  //     <>
  //       <div className="container mt-3">
  //         <div className="row">
  //           <div className="col-md-12">
  //             <div className="card">
  //               <div className="card-body">
  //                 <h3>Explore more categories</h3>

  //                 <CategoriesPlaceholder/>              
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">

            <Category/>
            <div className="card">
              <div className="card-body">
                <h3>Explore more categories</h3>
                {
                
                
                loading?<CategoriesPlaceholder/>:
                  categories.map((category) => (
                  <button
                    key={category._id}
                    type="button"
                    className=" mx-1 my-1 btn btn-outline-danger"
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
