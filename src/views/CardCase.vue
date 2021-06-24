<template>
  <h1>Card</h1>
  <Card>
    <template #header>标题</template>
    this is content.
  </Card>
  <br>
  <Card :border="false">
    <template #header>标题</template>
    this is content.
  </Card>
  <br>
  <Card :shadow="'none'">
    <template #header>标题</template>
    this is content.
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card/Card.vue'
export default defineComponent({
  name: 'CardCase',
  components: { Card },
})
</script>
