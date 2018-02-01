const localStorage = window.localStorage;

export default {
    get(item) {
        return JSON.parse(localStorage.getItem(item));

    },

    set(id, data) {
        localStorage.setItem(id, JSON.stringify(data));
    }
};
