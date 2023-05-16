const constructIngredientsTab = (recipeIngredients) => {
  const ingredientsList = document.createElement('ul');
  ingredientsList.classList.add('ingredients-list');

  const ingredientsArray = recipeIngredients.map(
    (ingredient) => ingredient.raw_text,
  );
  ingredientsArray.forEach((ingredient) => {
    const ingredientItem = document.createElement('li');
    ingredientItem.innerText = ingredient;
    ingredientsList.append(ingredientItem);
  });

  const preparationTab = document.querySelector('.tab.preparation');
  const ingredientsTab = document.querySelector('.tab.ingredients');
  const tabsContent = document.querySelector('.tabs-content');

  ingredientsTab.innerText = 'Ingredients';
  ingredientsTab.addEventListener('click', () => {
    ingredientsTab.classList.add('active');
    preparationTab.classList.remove('active');
    tabsContent.replaceChildren(ingredientsList);
  });
};

export default constructIngredientsTab;
