<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="item in items"
                :key="item.id"
                cols="4"
            >
                <v-card class="d-flex flex-column align-center">
                    <v-card-title>{{ item.name }}</v-card-title>
                    <v-card-subtitle>{{ `${item.price.toFixed(2)} €` }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'OrderList',
    props: {
        data: Array,
        conditions: Array
    },
    data() {
        return {
            items: [],
        }
    },
    created() {
        this.$props.data.forEach(element => {
            Object.keys(element).forEach(key => {
                this.$props.conditions.forEach(condition => {
                    if (key.includes(condition)) {
                        console.log(key + condition)
                        Array.from(element[key]).forEach(item => this.items.push(item));
                    }
                })
            }); 
        });
        console.log(this.items);
    },
    computed: {
        
    }
}
</script>

<style scoped>

</style>