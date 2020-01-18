<template>
  <div>
    <h1>aaa</h1>
    <form action="">
      <input type="text" v-model="text.title">
      <button v-on:click="updateText">
        更新
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    id: String,
  },
  data() {
    return {
      text: {}
    }
  },
  mounted() {
    axios.get(`/api/v1/texts/${this.id}`)
      .then(res => this.text = res.data.data)
      .catch(e => console.log(e))
  },
  methods: {
    updateText() {
      const { title } = this.text
      axios.put('/api/v1/texts/' + this.id, {
        title,
      })
        .then(this.$router.push('/texts/' + this.id))
        .catch(e => console.log(e))
    }
  }
}
</script>