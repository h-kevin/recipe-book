const constructPreparationTab = (recipeInstructions) => {
  const preparationTextArray = recipeInstructions.map(
    (instruction) => instruction.display_text,
  );
  const preparationText = preparationTextArray.join(' ');

  const preparation = document.createElement('p');
  preparation.classList.add('preparation');
  preparation.innerText = preparationText;

  const preparationTab = document.querySelector('.tab.preparation');
  const ingredientsTab = document.querySelector('.tab.ingredients');
  const tabsContent = document.querySelector('.tabs-content');

  preparationTab.innerText = 'Preparation';
  preparationTab.addEventListener('click', () => {
    preparationTab.classList.add('active');
    ingredientsTab.classList.remove('active');
    tabsContent.replaceChildren(preparation);
  });

  tabsContent.replaceChildren(preparation);
};

export default constructPreparationTab;
