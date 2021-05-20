import { axiosget } from "../../../../utils/http";
const actions = {
    getHeadData({ commit }) {
        axiosget("/portal/business/getcheckfee").then(
            (res) => {
                if (+res.code === 200) {
                    commit("updateHeadData", res.body);
                } else {
                    console.error("数据错了");
                }
            },
            () => {
                console.error("error");
            }
        );
    },
};

export default actions;
