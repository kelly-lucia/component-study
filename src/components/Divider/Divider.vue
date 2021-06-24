<template>
  <div
    :class="
      ['my-divider',
       direction ? 'my-divider--' + direction : '',
      ]"
  >
    <div
      v-if="$slots.default && direction==='horizontal'"
      :class="
        ['my-divider--text',
         position?'my-divider--'+position:''
        ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type positionType = PropType<'left' | 'center' | 'right'>;
type directionType = PropType<'horizontal' | 'vertical'>;
export default defineComponent({
  name: 'Divider',
  props: {
    direction: {
      type: String as directionType,
      default: 'horizontal',
    },
    position: {
      type: String as positionType,
      default: 'left',
    },
  },
})
</script>

<style lang="scss" scoped>
@import './Divider.scss';
</style>
