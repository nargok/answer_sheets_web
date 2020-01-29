<template>
  <div>
    <div>
      <input
        type="text"
        v-model="title"
        placeholder="タイトル">
      <button @click="searchBooks">検索</button>
    </div>
    <div>
      <ul v-for="(b, i) in this.books" :key="i">
        <li class="book__list">
          <table>
            <tr>
              <th>タイトル</th>
              <td>{{b.volumeInfo.title}}</td>
            </tr>
            <tr>
              <th>出版者</th>
              <td>{{b.volumeInfo.publisher}}</td>
            </tr>
            <tr>
              <th>出版日</th>
              <td>{{b.volumeInfo.publishedDate}}</td>
            </tr>
            <tr>
              <th></th>
              <td>
                <img :src="b.volumeInfo.imageLinks.smallThumbnail">
              </td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      books: [],
    }
  },
  methods: {
    searchBooks() {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.title)
       .then(res => this.books = res.data.items)
       .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.book__list {
  list-style: none;
}
</style>