<template>
  <h1>Button</h1>
  <Card>
    <template #header>基础按钮</template>
    <Button :type="'default'">默认按钮</Button>
    <Button :type="'primary'">主要按钮</Button>
    <Button :type="'success'">成功按钮</Button>
    <Button :type="'warning'">警告按钮</Button>
    <Button :type="'danger'">危险按钮</Button>
    <Button :type="'info'">信息按钮</Button>
    <div style="height: 12px"></div>
    <Button :type="'default'" :plain="true">默认按钮</Button>
    <Button :type="'primary'" :plain="true">主要按钮</Button>
    <Button :type="'success'" :plain="true">成功按钮</Button>
    <Button :type="'warning'" :plain="true">警告按钮</Button>
    <Button :type="'danger'" :plain="true">危险按钮</Button>
    <Button :type="'info'" :plain="true">信息按钮</Button>
    <div style="height: 12px"></div>
    <Button :type="'default'" :round="true">默认按钮</Button>
    <Button :type="'primary'" :round="true">主要按钮</Button>
    <Button :type="'success'" :round="true">成功按钮</Button>
    <Button :type="'warning'" :round="true">警告按钮</Button>
    <Button :type="'danger'" :round="true">危险按钮</Button>
    <Button :type="'info'" :round="true">信息按钮</Button>
    <div style="height: 12px"></div>
    <Button :type="'default'" :circle="true"><Icon :name="'edit'" /></Button>
    <Button :type="'primary'" :circle="true"><Icon :name="'delete'" /></Button>
    <Button :type="'success'" :circle="true"><Icon :name="'refresh'" /></Button>
    <Button :type="'warning'" :circle="true"><Icon :name="'search'" /></Button>
    <Button :type="'danger'" :circle="true"><Icon :name="'back'" /></Button>
    <Button :type="'info'" :circle="true"><Icon :name="'more'" /></Button>

    <template #footer>
      <Button :type="'text'">显示代码</Button>
    </template>
  </Card>

  <Card>
    <template #header>禁用按钮</template>
    <Button :type="'default'" :disabled="true">默认按钮</Button>
    <Button :type="'primary'" :disabled="true">主要按钮</Button>
    <Button :type="'success'" :disabled="true">成功按钮</Button>
    <Button :type="'warning'" :disabled="true">警告按钮</Button>
    <Button :type="'danger'" :disabled="true">危险按钮</Button>
    <Button :type="'info'" :disabled="true">信息按钮</Button>
    <div style="height: 12px"></div>
    <Button :type="'default'" :disabled="true" :plain="true">默认按钮</Button>
    <Button :type="'primary'" :disabled="true" :plain="true">主要按钮</Button>
    <Button :type="'success'" :disabled="true" :plain="true">成功按钮</Button>
    <Button :type="'warning'" :disabled="true" :plain="true">警告按钮</Button>
    <Button :type="'danger'" :disabled="true" :plain="true">危险按钮</Button>
    <Button :type="'info'" :disabled="true" :plain="true">信息按钮</Button>
    <template #footer>
      <Button :type="'text'">显示代码</Button>
    </template>
  </Card>

  <Card>
    <template #header>文字按钮</template>
    <Button :type="'text'">文字按钮</Button>
    <Button :type="'text'" :disabled="true">文字按钮</Button>
    <template #footer>
      <Button :type="'text'">显示代码</Button>
    </template>
  </Card>

  <Card>
    <template #header>不同尺寸</template>
    <Button :size="'large'">大型按钮</Button>
    <Button :size="'medium'">默认按钮</Button>
    <Button :size="'small'">中等按钮</Button>
    <Button :size="'mini'">小型按钮</Button>
    <template #footer>
      <Button :type="'text'">显示代码</Button>
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../components/Icon/Icon.vue'
import Button from '../components/Button/Button.vue'
import Card from '../components/Card/Card.vue'
export default defineComponent({
  components:{ Button, Icon, Card },
  methods: {
  },
})
</script>

<style lang="scss" scoped>
.card-footer {
  text-align: center;
}
</style>
