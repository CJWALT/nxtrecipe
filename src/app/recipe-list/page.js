import RecipeList from "@/components/recipe-list"

    const fetchListOfRecipes = async ()=>{ 
        try{ 
                const apiRes = await fetch('https://dummyjson.com/recipes');
                const result = await apiRes.json(); 

                return result?.recipes;
        }catch(err){ 
            console.log(err)
            throw new Error(e)
        }
    }




const Recipes = async () => {
        const recipeList = await fetchListOfRecipes();

  return <RecipeList 
            recipeList = {recipeList}
        />
}

export default Recipes
