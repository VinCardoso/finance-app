<template>
    <div>
        <h1>{{ transaction.title }}</h1>
        <h3>{{ transaction.userId }}</h3>
        <p>{{ transaction.body }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        transaction(){
            return this.$store.state.transactions.find(transaction => transaction.id == this.$route.params.id) || {}
        }
    },
}
</script>