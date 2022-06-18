const setLocalStorage = (key, value) => {
    let stringified_input = JSON.stringify(value);
    localStorage.setItem(key, stringified_input);
};

const getLocalStorage = (key) => {
    let stringified_value = localStorage.getItem(key);
    let parsed_value = JSON.parse(stringified_value);
    return parsed_value;
};

const clearLocalStorage = () => {
    localStorage.clear();
};

const setSessionStorage = (key, value) => {
    let stringified_input = JSON.stringify(value);
    sessionStorage.setItem(key, stringified_input);
};

const getSessionStorage = (key) => {
    let stringified_value = sessionStorage.getItem(key);
    let parsed_value = JSON.parse(stringified_value);
    return parsed_value;
};

const clearSessionStorage = () => {
    sessionStorage.clear();
};

const Storage = { setLocalStorage, getLocalStorage, clearLocalStorage, setSessionStorage, getSessionStorage, clearSessionStorage };

export { Storage };