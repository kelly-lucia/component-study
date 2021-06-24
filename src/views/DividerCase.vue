<template>
  <h1>Divider</h1>
  <Card>
    <template #header>基础用法</template>
    <p>如何阻止风跋涉山林苑囿</p>
    <Divider />
    <p>如何阻止花绽后落瓣残瘦</p>
  </Card>

  <Card>
    <template #header>设置文案</template>
    <Divider :position="'left'">少年游</Divider>
    <Divider :position="'center'">少年游</Divider>
    <Divider :position="'right'"><Icon name="edit" /></Divider>
  </Card>

  <Card>
    <template #header>垂直分割</template>
    花间一壶酒 <Divider direction="vertical" /> 独酌无相亲 <Divider direction="vertical" /> 举杯邀明月 <Divider direction="vertical" /> 对影成三人
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card/Card.vue'
import Divider from '../components/Divider/Divider.vue'
import Icon from '../components/Icon/Icon.vue'
export default defineComponent({
  components: { Card, Divider, Icon },
})
</script>
