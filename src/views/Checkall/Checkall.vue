<template>
  <div class="check-all">
    <div class="header-section">
      <HeadItem
        v-for="(i, k) in headItems"
        :key="k"
        :headTitle="i.headTitle"
        :icon="i.icon"
        :toolpit="i.toolpit"
        :currentData="headData[k] || {}"
      />
    </div>
    <div class="overview-section">
      <p>稽核概况</p>
    </div>
    <div class="detail-section">
      <a-button @click="JumpToDetail">稽核详情</a-button>
    </div>
  </div>
</template>

<script>
import HeadItem from "./HeadItem";
import { HeadItems } from "./constants";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    HeadItem,
  },
  created() {
    this.handleHeadData();
  },
  computed: {
    ...mapState({
      headData: (state) => state.checkall.headData,
    }),
  },
  data() {
    return {
      headItems: HeadItems,
    };
  },
  methods: {
    ...mapActions("checkall", ["getHeadData"]),
    JumpToDetail() {
      this.$store.dispatch("setCurrentBread", [
        {
          path: "checkdetail",
          breadcrumbName: "稽核详情",
        },
      ]);
      this.$router.push({
        path: "/checkdetail",
      });
    },
    handleHeadData() {
      this.getHeadData();
      console.log(this.headData);
    },
  },
};
</script>

<style lang="less">
.check-all {
  .header-section {
    display: flex;
    justify-content: space-between;
  }
  .overview-section {
    min-height: 280px;
    margin-top: 24px;
    background: #ffffff;
  }
  .detail-section {
    min-height: 280px;
    margin: 24px 0;
    background: #ffffff;
  }
}
</style>>

