<template>
  <div>
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
        <th>作成日時: </th>
        <td>{{text.created_at}}</td>
      </tr>
      <tr>
        <th>更新日時: </th>
        <td>{{text.updated_at}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    id: String
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
  }
}
</script>

<style>

</style>