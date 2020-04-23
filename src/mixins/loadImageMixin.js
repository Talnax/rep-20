export default {
    methods: {
        getImgUrl(pic) {
            if (!pic) return;
            console.log('getImgUrl(pic): ', "../assets/" + pic);
            return require("../assets/" + pic);
        }
    }
};