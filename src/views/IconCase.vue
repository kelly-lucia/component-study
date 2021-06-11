<template>
  <h1>Icon</h1>
  <div class="icon-case">
    <div v-for="i in iconRecord" :key="i">
      <Icon :name="i" />
      <p>{{ i }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../components/Icon/Icon.vue'

const iconRecord: Array<string> =
    ['circle-check-outline', 'removecircleo', 'remove-outline', 'circle-plus', 'arrow-right',
      'delete', 'edit', 'refresh', 'picture-outline', 'upload', 'location-outline', 'setting',
      'loading', 'search', 'document', 'more', 'time', 'view', 'back', 'warning']


export default defineComponent({
  components:{ Icon },
  data() {
    return {
      iconRecord: iconRecord,
    }
  },
})
</script>

<style lang="scss" scoped>
.icon-case {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    div {
        width: 130px;
        height: 130px;
    }
}
</style>
