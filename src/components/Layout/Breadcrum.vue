<template>
  <a-breadcrumb :routes="breadcrumbArr">
    <template slot="itemRender" slot-scope="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="paths.join('/')">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Breadcrum",
  mounted() {
    console.log(this.breadcrumbArr);
  },
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
};
</script>



