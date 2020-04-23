export default {
    methods: {
        getImgUrl(pic) {
            if (!pic) return;
            return require("../assets/" + pic);
        }
    }
};