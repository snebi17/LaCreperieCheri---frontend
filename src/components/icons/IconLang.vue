<template>
    <img :src="`../..../public/icons/flag_${iconLang}}.svg`">
</template>

<script>
export default {
    name: 'IconLang',
    props: {
        iconLang: String
    }
}
</script>

<style scoped>

</style>