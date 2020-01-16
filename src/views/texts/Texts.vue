<template>
  <div>
    <ul v-for="text in texts" :key="text.id">
      <li>{{text.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      texts: []
    }    
  },
  mounted() {
    axios.get('/api/v1/texts')
      .then(res => this.texts = res.data.data)
      .catch(e => console.log(e))
  }
}
</script>