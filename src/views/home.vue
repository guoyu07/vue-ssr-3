<template>
    <div class="home_view">
        <div class="container">
            <h1>the home page</h1>
            {{text}}
            <button @click="changeText"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                text: 'this is a vue ssr page'
            };
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                console.log('init data')
            },
            changeText() {
                this.text = 'you had triggered a click'
            }
        }
    };
</script>

<style lang="stylus">
    h1
        font-size: 40px;
</style>
