const debounce = (callBack, delay) => {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => callBack(...args), delay);
  }
}

export default debounce;
