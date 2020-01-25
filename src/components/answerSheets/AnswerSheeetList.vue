<template>
  <div>
    <ul v-for="answerSheet in answerSheets" :key="answerSheet.id">
      <li>{{ answerSheet.description}} {{answerSheet.created_at}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      answerSheets: [],
    }
  },
  mounted() {
    axios.get('/api/v1/texts/1/answer_sheets/')  // TODO テキストIDを取得する
      .then(res => this.answerSheets = res.data.data)
      .catch(e => console.log(e))
  }
}
</script>