import RecipeDetailsItem from "@/components/recipe-details";


const fetchRecipeDetails = async (currentRecipeId) =>{ 
  try{ 
      const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)

      const result = apiResponse.json();

      return result;
  } catch(err){ 
    console.log(err)
    return <div>failed to load</div>
  }
}



const RecipeDetails = async ({params}) => {

  const recipeDetails = await fetchRecipeDetails(params?.details); 
  return <RecipeDetailsItem recipeDetails = {recipeDetails}/>
}

export default RecipeDetails
