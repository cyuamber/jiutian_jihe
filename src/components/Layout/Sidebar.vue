<template>
  <div class="layout-siderbar">
    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="['checkall']"
      :default-open-keys="['check']"
      @click="clickMenu"
    >
      <a-sub-menu v-for="menu in menus" :key="menu.key">
        <span slot="title">
          <a-icon :type="menu.iconType" />
          <span>{{ menu.name }}</span>
        </span>
        <template v-if="menu.isChildren">
          <a-menu-item v-for="menuItem in menu.children" :key="menuItem.key">
            <span>{{ menuItem.name }}</span>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
// import util from "../../utils/utils";
import MENUITEM from "../../const/menu";

const menuStyle = {
  border: "none",
  borderTop: "2px solid #f0f2f5",
};

export default {
  name: "Sidebar",
  data() {
    return {
      menus: [],
    };
  },
  computed: {},
  created() {
    this.menus = MENUITEM.menuItems;
  },

  methods: {
    clickMenu(e) {
      let routePath = e.keyPath[0];
      let breadArr = e.keyPath;
      this.$router.push({
        path: `/${routePath}`,
      });
      // routes: [checkall,check]
      //   routes: [
      //       {
      //         path: "/",
      //         breadcrumbName: "网络费用稽核",
      //       },
      //       {
      //         path: "home",
      //         breadcrumbName: "稽核总览",
      //       },
      //     ],
      breadArr.reverse();
      let newArr = [];
      this.menus.map((menuItem) => {
        if (breadArr.indexOf(menuItem.key) !== -1) {
          newArr.push({ breadcrumbName: menuItem.name });
          if (menuItem.isChildren) {
            menuItem.children.map((menu) => {
              if (breadArr.indexOf(menu.key) !== -1) {
                newArr.push({ path: menu.key, breadcrumbName: menu.name });
              }
            });
          }
        }
      });
      this.$store.dispatch("getCurrentBread", newArr);
    },
  },
};
</script>
<style lang="less" scoped>
.layout-siderbar {
}
</style>