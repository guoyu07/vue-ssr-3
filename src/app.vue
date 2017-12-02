<template>
    <div id="app">
        <header class="header">
            <nav class="inner">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
        <transition name="fade" mode="out-in">
            <router-view class="view" />
        </transition>
    </div>
</template>
<style lang="stylus">
    .header
        background-color #000
        position fixed
        z-index 999
        height 55px
        top 0
        left 0
        right 0
        .inner
            max-width 800px
            box-sizing border-box
            margin 0px auto
            padding 15px 5px
        a
            color rgba(255, 255, 255, .8)
            line-height 24px
            transition color .15s ease
            display inline-block
            vertical-align middle
            font-weight 300
            letter-spacing .075em
            margin-right 1.8em
            &:hover
                color #fff
            &.router-link-active
                color #fff
                font-weight 400
    .view
        margin-top 80px
</style>

