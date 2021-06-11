<template>
  <h1>Card</h1>
  <Card>
    <template #header>标题标题标题标题标题</template>

    this is card
    'none' | 'normal' | 'rotate' | 'raise' | 'todolist'
  </Card>

  <div class="box none"></div>
  <div class="box normal"></div>
  <div class="box rotate"></div>
  <div class="box raise"></div>
  <div class="box todolist"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card/Card.vue'
export default defineComponent({
  name: 'CardCase',
  components: { Card },
})
</script>

<style lang="scss" scoped>
.box {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 20px 20px;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
}
.normal {
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
}
.todolist {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
</style>
