<template>
  <div class="navbar">
    <div class="logo">
      <h3>ORDER<span>FORM</span></h3>
    </div>
    <div class="cart">
      <p>Cart</p>
      <span class="badge">{{totalItems}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      totalItems: 'getCartLength'
    })
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #AE0000;
  padding: 20px 45px;

  .logo {
    h3 {
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0.09em;
      color: #FFFFFF;
      margin: 0;
      font-weight: 400;
      span{
        font-weight: 700;
      }
    }
  }

  .cart {
    display: flex;
    align-items: center;
    column-gap: 5px;

    p {
      font-size: 16px;
      line-height: 100%;
      color: #FFFFFF;
      margin: 0;
    }

    span {
      display: flex;
      height: 23px;
      width: 23px;
      border-radius: 50%;
      background: #fff;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
