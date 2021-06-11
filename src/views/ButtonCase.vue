<template>
  <h1>Button</h1>
  <h4>基础按钮</h4>
  <div style="padding: 10px 0">
    <Button :type="'default'">默认按钮</Button>
    <Button :type="'primary'">主要按钮</Button>
    <Button :type="'success'">成功按钮</Button>
    <Button :type="'warning'">警告按钮</Button>
    <Button :type="'danger'">危险按钮</Button>
    <Button :type="'info'">信息按钮</Button>
  </div>
  <div style="padding: 10px 0">
    <Button :type="'default'" :plain="true">默认按钮</Button>
    <Button :type="'primary'" :plain="true">主要按钮</Button>
    <Button :type="'success'" :plain="true">成功按钮</Button>
    <Button :type="'warning'" :plain="true">警告按钮</Button>
    <Button :type="'danger'" :plain="true">危险按钮</Button>
    <Button :type="'info'" :plain="true">信息按钮</Button>
  </div>
  <div style="padding: 10px 0">
    <Button :type="'default'" :round="true">默认按钮</Button>
    <Button :type="'primary'" :round="true">主要按钮</Button>
    <Button :type="'success'" :round="true">成功按钮</Button>
    <Button :type="'warning'" :round="true">警告按钮</Button>
    <Button :type="'danger'" :round="true">危险按钮</Button>
    <Button :type="'info'" :round="true">信息按钮</Button>
  </div>
  <div style="padding: 10px 0">
    <Button :type="'default'" :circle="true"><Icon :name="'edit'" /></Button>
    <Button :type="'primary'" :circle="true"><Icon :name="'delete'" /></Button>
    <Button :type="'success'" :circle="true"><Icon :name="'refresh'" /></Button>
    <Button :type="'warning'" :circle="true"><Icon :name="'search'" /></Button>
    <Button :type="'danger'" :circle="true"><Icon :name="'back'" /></Button>
    <Button :type="'info'" :circle="true"><Icon :name="'more'" /></Button>
  </div>
  <h4>禁用按钮</h4>
  <div style="padding: 10px 0">
    <Button :type="'default'" :disabled="true">默认按钮</Button>
    <Button :type="'primary'" :disabled="true">主要按钮</Button>
    <Button :type="'success'" :disabled="true">成功按钮</Button>
    <Button :type="'warning'" :disabled="true">警告按钮</Button>
    <Button :type="'danger'" :disabled="true">危险按钮</Button>
    <Button :type="'info'" :disabled="true">信息按钮</Button>
  </div>
  <div style="padding: 10px 0">
    <Button :type="'default'" :disabled="true" :plain="true">默认按钮</Button>
    <Button :type="'primary'" :disabled="true" :plain="true">主要按钮</Button>
    <Button :type="'success'" :disabled="true" :plain="true">成功按钮</Button>
    <Button :type="'warning'" :disabled="true" :plain="true">警告按钮</Button>
    <Button :type="'danger'" :disabled="true" :plain="true">危险按钮</Button>
    <Button :type="'info'" :disabled="true" :plain="true">信息按钮</Button>
  </div>

  <h4>文字按钮</h4>
  <div style="padding: 10px 0">
    <Button :type="'text'">文字按钮</Button>
    <Button :type="'text'" :disabled="true">文字按钮</Button>
  </div>
  <h4>不同尺寸</h4>
  <div style="padding: 10px 0">
    <Button :size="'large'">大型按钮</Button>
    <Button :size="'medium'">默认按钮</Button>
    <Button :size="'small'">中等按钮</Button>
    <Button :size="'mini'">小型按钮</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../components/Icon/Icon.vue'
import Button from '../components/Button/Button.vue'
export default defineComponent({
  components:{ Button, Icon },
})
</script>
