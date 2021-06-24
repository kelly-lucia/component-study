<template>
  <h1>Checkbox</h1>
  <Card>
    <Checkbox>选择</Checkbox>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card/Card.vue'
import Checkbox from '../components/Checkbox/Checkbox.vue'
export default defineComponent({
  components: { Card, Checkbox },
})
</script>
