import MENUITEM from "../../../const/menu";
const router = {
    state: {
        breadcrumbArr: [],
        currentMenu: [],
    },
    mutations: {
        //接受到传入的menu信息，渲染出面包屑
        setBreadcrumb(state, data) {
            console.log(data, "===");
            state.breadcrumbArr = data;
        },
        setCurrentMenu(state, data) {
            state.currentMenu = data;
        },
    },
    getters: {},
    actions: {
        getCurrentBread({ commit }, routes) {
            commit("setBreadcrumb", routes);
        },
        getCurrentMenu({ commit }, data) {
            commit("setCurrentMenu", data);
        },
    },
};

export default router;
