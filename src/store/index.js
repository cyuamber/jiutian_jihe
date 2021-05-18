import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/components/login";
import breadcrum from "./modules/components/breadcrum";
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const store = new Vuex.Store({
    // plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
    modules: {
        login,
        breadcrum,
    },
});

export default store;
