<template>
  <div id="app">
    <header>
      <!-- 路由头部组件  -->
      <router-view name='header'></router-view>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <!-- 路由底部组件  -->
      <router-view name='footer'></router-view>
    </footer>
  </div>
</template>

<style lang="scss">
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul, li {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, 
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
header {
  width: 100%;
  height: 8%;
  overflow: hidden;
  box-sizing: border-box;
}
main {
  flex: 1;
  overflow: hidden;
}
footer {
  width: 100%;
  height: 8%;
  overflow: auto;
  box-sizing: border-box;
}
@font-face {
  font-family: 'iconfont';  /* project id 1258498 */
  src: url('//at.alicdn.com/t/font_1258498_txwa9vfmxng.eot');
  src: url('//at.alicdn.com/t/font_1258498_txwa9vfmxng.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1258498_txwa9vfmxng.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1258498_txwa9vfmxng.woff') format('woff'),
  url('//at.alicdn.com/t/font_1258498_txwa9vfmxng.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1258498_txwa9vfmxng.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
