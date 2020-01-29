<template>
  <table>
    <tr>
      <th>タイトル</th>
      <td>{{this.book.volumeInfo.title}}</td>
    </tr>
    <tr>
      <th>出版者</th>
      <td>{{this.book.volumeInfo.publisher}}</td>
    </tr>
    <tr>
      <th>出版日</th>
      <td>{{this.book.volumeInfo.publishedDate}}</td>
    </tr>
    <tr>
      <th></th>
      <td>
        <img :src="this.book.volumeInfo.imageLinks.smallThumbnail">
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    book: Object
  }
}
</script>