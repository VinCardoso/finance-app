<template>
    <div>
        <h1>{{ transaction.description }}</h1>
        <h3>R$ {{ transaction.value }}</h3>
        <p>{{ transaction.date }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        transaction(){
            return this.$store.state.transactions.find(transaction => transaction._id == this.$route.params.id) || {}
        }
    },
}
</script>