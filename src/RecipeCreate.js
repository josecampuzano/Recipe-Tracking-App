import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
}

const [formData, setFormData] = useState({ ...initialFormState })
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

// const [recipes, setRecipes] = useState([])

const submitHandler = (event) => {
  event.preventDefault()
  setFormData({...initialFormState})
  setRecipes([...recipes, formData])
  console.log(formData)
  console.log(recipes)
}


  return (
    <form name="create">
      <table>
        <tbody>
          <tr id="form-row">
            <td>
              <input 
              id="recipeform"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              ></input>
            </td>
            <td>
              <input 
              id="recipeform"
              type="text"
              name="cuisine"
              placeholder="Cuisine"
              onChange={handleChange}
              value={formData.cuisine}
              ></input>
            </td>
            <td>
              <input 
              id="recipeform"
              type="url"
              name="photo"
              placeholder="URL"
              onChange={handleChange}
              value={formData.photo}
              ></input>
            </td>
            <td>
              <textarea 
              id="recipeform"
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea 
              id="recipeform"
              type="text"
              name="preparation"
              placeholder="Preparation"
              onChange={handleChange}
              value={formData.preparation}
              ></textarea>
            </td>
            <td>
              <form id="recipeForm" onSubmit={submitHandler}>
              <button type="submit">Create</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
