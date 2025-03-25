import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('font-size-unique', {
  beforeMount: (el, binding) => {
    el.style.fontSize = binding.value + 'px'
  },
})

app.directive('custom-size', {
  beforeMount: (el, binding) => {
    let size = 18
    switch (binding.arg) {
      case 'sm':
        size = 10
        break
      case 'md':
        size = 20
        break
      case 'lg':
        size = 30
        break
    }
    el.style.fontSize = size + 'px'
  },
})
app.directive('custom-font', {
  beforeMount: (el, binding) => {
    let size = 18
    if (binding.modifiers.sm) {
      size = 10
    } else if (binding.modifiers.md) {
      size = 20
    } else if (binding.modifiers.lg) {
      size = 30
    }
    el.style.fontSize = size + 'px'

    if (binding.modifiers.red) {
      el.style.color = '#ff0000'
    } else if (binding.modifiers.blue) {
      el.style.color = '#00ff00'
    } else if (binding.modifiers.green) {
      el.style.color = '#0000ff'
    }
    console.log(binding)
    console.log(binding.modifiers.green)
  },
})

app.mount('#app')
