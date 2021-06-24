<template>
  <h1>Table</h1>

  <Card>
    <Table />
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card/Card.vue'
import Table from '../components/Table/Table.vue'
export default defineComponent({
  components: { Card, Table },
})
</script>
