<template>
  <div>
    <input
      type="text"
      v-model="title"
      placeholder="タイトル">
    <button @click="searchBooks">検索</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    searchBooks() {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.title)
       .then(res => console.log(res.data.items))
    }
  }
}
</script>