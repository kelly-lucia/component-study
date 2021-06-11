<template>
  <div
    :class="[
      'my-card',
      'my-card--' + shadow,
      {
        'is-border': border
      }]"
  >
    <header v-if="$slots.header" class="my-card--header">
      <slot name="header"></slot>
    </header>
    <div class="my-card--content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type shadowType = PropType<'none' | 'normal' | 'rotate' | 'raise' | 'todolist'>;
export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    shadow: {
      type: String as shadowType,
      default: 'normal',
    },
    border: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    console.log(this.$slots)
  },
})
</script>

<style lang="scss" scoped>
@import "./Card.scss";
</style>
