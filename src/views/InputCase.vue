<template>
  <h1>Input</h1>
  <Card>
    <Input>
      <template #prepend>prepend</template>
      <template #prefix>prefix</template>
      <template #suffix>suffix</template>
      <template #append>append</template>
    </Input>
  </Card>
</template>

<script lang="ts">
import Card from '../components/Card/Card.vue'
import Input from '../components/Input/Input.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Card, Input },
})
</script>
