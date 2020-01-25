<template>
  <div>
    <form action="">
      <div>
        <input type="text" v-model="description" placeholder="解答用紙の説明">
      </div>
      <div>
        <input type="number" placeholder="問題数">
      </div>
      <button>
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
      // TODO 回答を作成済なら作成と編集を表示わける
      description: ""
    }
  },
  methods: {
    createAnswerSheet() {
      axios.post(`/api/v1/texts/1/answer_sheets/`, { description: this.description })
        .then(this.$router.push(`texts/id`))  // TODO answerSheet詳細に遷移する
        .catch(e => console.log(e))
    }
  }
}
</script>