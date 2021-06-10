<template>
  <div class="home">
    <div class="header"></div>
    <div class="content">
      <div class="left">
        <p>
          <router-link to="/button">Button</router-link>
        </p>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <!-- <router-view /> -->
</template>

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
      padding: 15px;
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
