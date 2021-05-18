<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img v-if="!collapsed" src="@/assets/logo.png" />
        <img v-else-if="collapsed" src="@/assets/cmcc.png" />
      </div>
      <div class="sub-menu">
        <div class="layout-siderbar__logo">
          <img src="@/assets/jiutian.png" />
        </div>
        <div class="layout-siderbar__title">
          <div class="divide"></div>
          <p>智能稽核平台</p>
          <div class="divide"></div>
        </div>
      </div>

      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="header-operation">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> 登出 </a-menu-item>
            </a-menu>
            <a>User name <a-icon type="down" /></a>
          </a-dropdown>
        </div>
      </a-layout-header>
      <Breadcrum class="layout-breadcrum" />
      <a-layout-content
        :style="{
          height: '100vh',
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Breadcrum from "./Breadcrum";
import Sidebar from "./Sidebar";
export default {
  components: {
    Breadcrum,
    Sidebar,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="less">
.ant-layout-sider {
  background: #172b4d;
}
.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  background: #172b4d;
}
.ant-menu-item {
  background: #172b4d;
}
.ant-menu-dark.ant-menu-inline .ant-menu-item,
.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
  margin: 0;
}
.layout-header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0;
  box-shadow: 0px -1px 8px 1px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.layout-breadcrum {
  background: #ffffff;
  padding: 20px 24px;
  text-align: left;
}
.layout-header .header-operation {
  margin-right: 24px;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  padding: 15px 60px;
  background: #081a39;
}
#components-layout-demo-custom-trigger .logo img {
  width: 90px;
}
.sub-menu {
  .layout-siderbar__logo {
    height: 32px;
    margin: 16px;
    text-align: center;
    img {
      height: 120%;
    }
  }
  .layout-siderbar__title {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    padding: 16px;
    .divide {
      width: 16px;
      height: 1px;
      background: #ffffff;
      opacity: 0.19;
    }
    p {
      margin: 0 16px;
    }
  }
}
.ant-layout-header {
  text-align: left;
}
.ant-menu-item {
  text-align: left;
  color: #d0d0d0;
}
.ant-menu-item span {
  color: #d0d0d0;
  margin-left: 15px;
}
</style>