<template>
  <div
    :class="[
      'my-table'
    ]"
  >
    <TableHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableHeader from './header/TableHeader.vue'
export default defineComponent({
  components: { TableHeader },
})
</script>

<style lang="scss" scoped>
@import "./Table.scss";
</style>
