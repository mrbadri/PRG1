const Debounce = (func, delay) => {
    let debounceTimer;
    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  export default Debounce;
  