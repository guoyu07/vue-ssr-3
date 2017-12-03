<template>
    <div class="home_view">
        <div class="container">
            <h1>the home page</h1>
            {{text}}
            <button @click="changeText"></button>
            <ul>
                <li v-for="(item, index) in items">
                    <span>{{ item.title }}: {{ item.description }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    function fetchItems(store) {
        return store.dispatch('LOAD_ACTIVE_ITEMS');
    }

    export default {
        name: 'home',
        data () {
            return {
                text: 'this is a vue ssr page'
            };
        },
        computed: { 
            items() {
                return this.$store.getters.activeItems;
            }
        },
        // We only fetch the item itself before entering the view, because
        // it might take a long time to load threads with hundreds of comments
        // due to how the HN Firebase API works.
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
