<template>
  <svg class="my-icon" aria-hidden="true">
    <use :xlink:href="'#icon' + name" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import "./Icon.scss";
</style>
