<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="['feeall']"
        :default-open-keys="['networkfee']"
      >
        <a-sub-menu key="networkfee">
          <span slot="title">
            <a-icon type="dashboard" />
            <span>网络费用稽核</span>
          </span>
          <template>
            <a-menu-item key="feeall">
              <span>稽核总览</span>
            </a-menu-item>
            <a-menu-item key="elecfee">
              <span>电费稽核</span>
            </a-menu-item>
            <a-menu-item key="2">
              <span>铁塔服务费稽核</span>
            </a-menu-item>
            <a-menu-item key="3">
              <span>租费稽核</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </a-menu>
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
            <a>Button <a-icon type="down" /></a>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          height: '100vh',
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
.layout-header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0;
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
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
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