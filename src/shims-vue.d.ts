/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type ComponentType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'

