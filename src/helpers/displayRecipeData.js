import createIngredientsTab from "./constructIngredientsTab";
import createPreparationTab from "./constructPreparationTab";

const displayRecipeData = (recipeData) => {
  const recipeContent = document.querySelector('#recipe-content');

  const recipeName = document.createElement('h2');
  recipeName.classList.add('recipe-name');
  recipeName.innerText = recipeData.name;

  const recipeDescription = document.createElement('p');
  recipeDescription.classList.add('recipe-description');
  recipeDescription.innerText = recipeData.description;

  const recipeImage = document.createElement('img');
  recipeImage.classList.add('recipe-image');
  recipeImage.src = recipeData.thumbnail_url;
  recipeImage.alt = recipeData.name;

  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('tabs-container');
  const preparationTab = document.createElement('button');
  preparationTab.classList.add('tab', 'preparation', 'active');
  const ingredientsTab = document.createElement('button');
  ingredientsTab.classList.add('tab', 'ingredients');
  tabsContainer.append(preparationTab, ingredientsTab);

  const tabsContent = document.createElement('div');
  tabsContent.classList.add('tabs-content');

  recipeContent.replaceChildren(
    recipeName,
    recipeDescription,
    recipeImage,
    tabsContainer,
    tabsContent,
  );

  createPreparationTab(recipeData.instructions);
  createIngredientsTab(recipeData.sections[0].components);
};

export default displayRecipeData;
