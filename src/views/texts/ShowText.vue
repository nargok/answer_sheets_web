<template>
  <div>
    <img :src="text.image_url">
    <table>
      <tr>
        <th>id: </th>
        <td>{{text.id}}</td>
      </tr>
      <tr>
        <th>title: </th>
        <td>{{text.title}}</td>
      </tr>
      <tr>
        <th>出版者: </th>
        <td>{{text.publisher}}</td>
      </tr>
      <tr>
        <th>出版日: </th>
        <td>{{text.published_date}}</td>
      </tr>
      <tr>
        <th>作成日時: </th>
        <td>{{text.created_at}}</td>
      </tr>
      <tr>
        <th>更新日時: </th>
        <td>{{text.updated_at}}</td>
      </tr>
    </table>
    <button v-on:click="goToEditText">
      編集
    </button>
    <button v-on:click="deleteText">
      削除
    </button>
    <button v-on:click="goToCreateAnswerSheet">
      回答用紙をつくる
    </button>
    <AnswerSheetList />
  </div>
</template>

<script>
import axios from 'axios'
import AnswerSheetList from '../../components/answerSheets/AnswerSheeetList.vue'

export default {
  props: {
    id: String
  },
  components: {
    AnswerSheetList
  },
  computed: {
    text() {
      return this.$store.state.text
    }
  },
  mounted() {
    this.$store.dispatch('getTextAction', { textId: this.id })
  },
  methods: {
    deleteText() {
      axios.delete(`/api/v1/texts/${this.id}`)
        .then(() => this.$router.push('/'))
        .catch(e => console.log(e))
    },
    goToEditText() {
      this.$router.push(`/texts/${this.id}/edit`)
    },
    goToCreateAnswerSheet() {
      this.$router.push(`/texts/${this.id}/answer_sheets/new`)
    }
  }
}
</script>

<style>

</style>