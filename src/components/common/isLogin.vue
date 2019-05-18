<template>
    <div></div>
</template>

<script>
    export default {
        name: "is-login",
        mounted(){
            this.$store.commit("OUT_LOGIN");
            this.$router.push("/");
        }
    }
</script>

<style scoped>

</style>