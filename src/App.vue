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
        font-family: '黑体';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
    * {
        box-sizing: border-box;
    }
    p {
        margin: 0;
        padding: 0;
    }
    @media only screen and (min-width: 0) and (max-width: 320px) { html { font-size: 8.5px; } }
    @media only screen and (min-width: 320px) and (max-width: 352px) { html { font-size: 9px; } }
    @media only screen and (min-width: 352px) and (max-width: 640px) { html { font-size: 9.5px; } }
    @media only screen and (min-width: 640px) and (max-width: 750px) { html { font-size: 16px; } }
    @media only screen and (min-width: 750px) { html { font-size: 1rem; } }
</style>
