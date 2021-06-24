<template>
  <!-- <input> -->

  <div :class="['my-input']">
    <div class="my-input--prepend">
      <slot name="prepend"></slot>
    </div>
    <span class="my-input--prefix">
      <slot name="prefix"></slot>
    </span>
    <input>
    <span class="my-input--suffix">
      <slot name="suffix"></slot>
    </span>
    <div class="my-input--append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {

  },
})
</script>
<style lang="scss" scoped>
@import './Input.scss';
</style>
