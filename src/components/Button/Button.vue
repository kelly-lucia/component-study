<template>
  <button
    :class="[
      'my-button',
      type ? 'my-button--' + type : '',
      size ? 'my-button--' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
    :type="nativeType"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "./Button.scss";
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
type MyButtonType = PropType<ComponentType  |'text' | 'default' >;
type MyButtonSize = PropType<ComponentSize>;
type MyButtonnativeType = PropType<'button' | 'submit' | 'reset'>;

interface MyButtonProps {
  type: MyButtonType
  size: ComponentSize
  icon: string
  nativeType: string
  loading: boolean
  disabled: boolean
  plain: boolean
  autofocus: boolean
  round: boolean
  circle: boolean
}

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as MyButtonType,
      default: 'default',
    },
    size: {
      type: String as MyButtonSize,
      default: 'medium',
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String as MyButtonnativeType,
      default: 'button',
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  setup(props: MyButtonProps){
    // console.log(props)
    return {}
  },
})
</script>
