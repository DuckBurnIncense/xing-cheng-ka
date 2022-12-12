<template>
    <div id="app">
        <router-view class="router-view" />
    </div>
</template>

<style lang="less">
    html, body, #app, .router-view {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Avenir,Helvetica,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
    * {
        box-sizing: border-box;
    }
    @media only screen and (min-width: 320px) and (max-width: 352px) { html { font-size: 0.4rem; } }
    @media only screen and (min-width: 352px) and (max-width: 640px) { html { font-size: 0.6rem; } }
    @media only screen and (min-width: 640px) and (max-width: 750px) { html { font-size: 0.8rem; } }
    @media only screen and (min-width: 750px) { html { font-size: 1rem; } }
</style>
