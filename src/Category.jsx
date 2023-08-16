import React from "react";
import { useState } from "react";

export default function Category() {
  let initialCategory = {
    title: "",
    imageUrl: "",
  };
  let [category, setCategory] = useState(initialCategory);
  let [response, setResponse] = useState({})
  let handleForm =async (e) => {
    e.preventDefault();

    // data validation in react i.e. Formik , yup , ReactHook form
    // UI library for alter , popup etc
    try {
      const response = await fetch("https://fakestoreapi.up.railway.app/categories",{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    } )

    const result = await response.json();
    setResponse(result)

    } catch (error) {
      console.error("Error:", error);
    }
    
    
    
  };

  let categoryChangeHandler = (value) => {
    // console.log("change event")
    let copyCategory = { ...category };
    copyCategory.title = value;
    setCategory(copyCategory);
  };

  return (
    <>
      <h1>Add new Category</h1>
     
      {
        response.message
      }
     
      <form
        className="row gx-3 gy-2 align-items-center my-3"
        onSubmit={(e) => handleForm(e)}
      >
        <div className="col-sm-3">
          <label className="visually-hidden" htmlFor="">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            value={category.title}
            placeholder="Category title"
            onChange={(e) => categoryChangeHandler(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
