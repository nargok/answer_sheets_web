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
          <SearchTextItem :book="b" />
          <button @click="createText(b)">テキストを登録する</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchTextItem from './SearchTextItem.vue'

export default {
  components: {
    SearchTextItem
  },
  data() {
    return {
      title: '',
      books: [],
    }
  },
  methods: {
    searchBooks() {
      this.$http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.title)
        .then(res => this.books = res.data.items)
        .catch(e => console.error(e))
    },
    createText(book) {
      const { volumeInfo } = book
      const {
        title,
        publisher,
        publishedDate,
        imageLinks,
      } = volumeInfo;
      const {
        smallThumbnail,
      } = imageLinks;
      console.info(title, publisher, publishedDate, smallThumbnail)
    }
  }
}
</script>

<style scoped>
.book__list {
  list-style: none;
}
</style>