<template>
    <div class="home_view">
        <div class="container">
            <h1>the home page</h1>
            {{text}}
            <button @click="changeText"></button>
            <ul>
                <li v-for="(item, index) in items">
                    <span>{{ item.uid }}: {{ item.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // function fetchItems(store) {
    //     return store.dispatch('LOAD_ACTIVE_ITEMS');
    // }

    export default {
        name: 'home',
        data () {
            return {
                text: 'this is a vue ssr page'
            };
        },
        mounted () {
            this.$store.dispatch('LOAD_ACTIVE_ITEMS')
        },
        computed: { 
            items() {
                return this.$store.getters.activeItems;
            }
        },
        asyncData({ store }) {
            return store.dispatch('LOAD_ACTIVE_ITEMS')
        },
        methods: {
            changeText() {
                this.text = 'you had triggered a click'
            }
        }
    };
</script>

<style lang="stylus">
    h1
        font-size 40px;
</style>
