const mutations = {
    //接受到传入的menu信息，渲染出面包屑
    updateHeadData(state, data) {
        console.log(data);
        state.headData = data;
    },
};
export default mutations;
