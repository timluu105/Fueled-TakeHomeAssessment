<template>
  <div id="app">
    <Navbar/>
    <Cart/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import Cart from '@/views/Cart';

export default {
  name: 'App',
  components: {
    Navbar,
    Cart
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'SF Pro Text';
  src: url("./assets/fonts/SF-Pro-Display-Regular.otf") format("opentype");
}

@font-face {
  font-family: 'SF Pro Text';
  font-weight: 500;
  src: url("./assets/fonts/SF-Pro-Display-Medium.otf") format("opentype");
}
@font-face {
  font-family: 'SF Pro Text';
  font-weight: 600;
  src: url("./assets/fonts/SF-Pro-Display-Semibold.otf") format("opentype");
}
@font-face {
  font-family: 'SF Pro Text';
  font-weight: 700;
  src: url("./assets/fonts/SF-Pro-Display-Bold.otf") format("opentype");
}
*, *:before, *:after {
  font-family: 'SF Pro Text', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
