<template>
  <div class="home">
    <h1>App Financeiro</h1>
    <table>
      <tr>
        <th>Data</th>
        <th>Valor</th>
        <th>Descrição</th>
      </tr>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.date }}</td>
        <td>R$ {{ transaction.value }}</td>
        <td><router-link :to="{ name: 'transaction', params: { id: transaction._id }}">{{ transaction.description }}</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {},
  computed:{
    transactions() { return this.$store.state.transactions }
  }
};
</script>

<style scoped lang="scss">
  table,th,td {
    border: 1px solid black;
  }
  table{
    width: 80%;
  }
</style>