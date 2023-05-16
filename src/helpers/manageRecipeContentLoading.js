const manageRecipeContentLoading = (loading) => {
  const recipeContent = document.querySelector('#recipe-content');

  if (loading) {
    const contentLoadingIndicator = document.createElement('div');
    contentLoadingIndicator.classList.add('loading-indicator-container');
    const spinner = document.createElement('span');
    spinner.classList.add('loading-indicator');
    const loadingText = document.createElement('span');
    loadingText.innerText = 'Loading...';

    contentLoadingIndicator.append(spinner, loadingText);
    recipeContent.replaceChildren(contentLoadingIndicator);
  } else {
    recipeContent.replaceChildren();
  }
};

export default manageRecipeContentLoading;
