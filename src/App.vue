<template>
  <link rel="stylesheet" href="@/assets/fonts.icons/iconfont.css">
  <div class="home">
    <div class="header">
    </div>
    <div class="content">
      <div class="left">
        <p v-for="router in routerList" :key="router.path">
          <router-link :to="router.path">  {{ router.name }}</router-link>
        </p>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      routerList: [],
    }
  },
  created() {
    this.routerList = this.$router.getRoutes()
  },
})
</script>

<style lang="scss">
@import url(./theme/common.scss);


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

.home {
  height: 100%;
  .header {
    height: 60px;
    background-color: #cdcdcd;
  }
  .content {
    height: calc(100% - 60px);
    display: flex;
  }
  .left {
    width: 200px;
    background-color: #f1f1f1;

    p {
      text-align: center;
    }
  }
  .right {
    padding: 12px;
    width: calc(100% - 200px);
    overflow: auto;
  }
}
</style>
