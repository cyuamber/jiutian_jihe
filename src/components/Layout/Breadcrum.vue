<template>
  <a-breadcrumb :routes="breadcrumbArr">
    <template slot="itemRender" slot-scope="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <span v-else @click="JumptobreadLink">
        <router-link :to="paths.join('/')">
          {{ route.breadcrumbName }}
        </router-link>
      </span>
    </template>
  </a-breadcrumb>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Breadcrum",
  mounted() {},
  computed: {
    ...mapState({
      breadcrumbArr: (state) => state.breadcrum.breadcrumbArr,
    }),
  },
  data() {
    return {
      routes: this.breadcrumbArr,
    };
  },
  methods: {
    JumptobreadLink(e) {
      const currentHash = e.target.hash.substr(2);
      let updateBread = this.breadcrumbArr;
      updateBread.map((bread, i) => {
        if (bread.path === currentHash) {
          updateBread.splice(i + 1);
        }
      });
      this.$store.commit("setBreadcrumb", updateBread);
    },
  },
};
</script>



