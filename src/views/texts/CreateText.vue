<template>
  <div>
    <form action="">
      <input type="text"
       v-model="title"
       placeholder="title">
      <button v-on:click="createText">
        登録
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    createText() {
      axios.post('/api/v1/texts/', {
        title: this.title,
      }).then(this.$router.push('/'))
    }
  }
}
</script>