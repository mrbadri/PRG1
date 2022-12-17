const loadLocalStorage = (name, type) => {
    try {
      const loadingState = localStorage.getItem(name);
      if (!loadingState) {
        return undefined;
      }
  
      if (type === 'json') {
        return JSON.parse(loadingState);
      }
      return loadingState;
    } catch (err) {
      return undefined;
    }
  };
  
  const saveLocalStorage = (name, data, type) => {
    try {
      if (type === 'json') {
        const savingState = JSON.stringify(data);
  
        localStorage.setItem(name, savingState);
      } else {
        localStorage.setItem(name, data);
      }
    } catch (err) {
      return false;
    }
  };
  
  const clearLocalStorage = name => {
    localStorage.removeItem(name);
  };
  
  export { loadLocalStorage, saveLocalStorage, clearLocalStorage };
  