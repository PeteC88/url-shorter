import { createApp } from 'vue'
import store from './store/index.js'

import App from './App.vue'


//createApp(App).mount('#app')

const app = createApp(App);

app.use(store);

// Subscribe to store updates
store.subscribe( (mutation, state) => {
    localStorage.setItem('links', JSON.stringify(state.links));  
})

app.mount('#app');