<template>
  <label :class="['my-checkbox']">
    <input type="checkbox">
    <span class="my-checkbox--input"></span>
    <label class="my-checkbox--label">
      <slot></slot>
    </label>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss" scoped>
@import './Checkbox.scss';
</style>
