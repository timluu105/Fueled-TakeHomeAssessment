<template>
  <div class="cart-footer">
    <div class="additional-comments">
      <label for="additional-comments">Additional Comments</label>
      <textarea id="additional-comments" rows="10"></textarea>
    </div>

    <div class="delivery-info">
      <h3>Delivery Info</h3>
      <p>All orders will be sent by Special Delivery, which will be insured and will need to be signed for. Allow 4-6
        weeks for delivery.</p>
    </div>

    <div class="checkout">
      <div class="subtotal">
        <span class="info">Sub Total</span>
        <span class="amount">${{ formatPrice(subtotal) }}</span>
      </div>
      <div class="tax">
        <span class="info">Tax</span>
        <span class="amount">${{formatPrice(tax)}}</span>
      </div>
      <div class="total">
        <span class="info">Total</span>
        <span class="amount">${{formatPrice(total)}}</span>
      </div>
      <button class="btn-checkout" @click="checkout">
        Checkout
      </button>
      <div class="bottom-link">
        <span>or <a to="/">Continue Shopping</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartFoot',
  props: {
    subtotal: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },

  },
  methods: {
    checkout() {
      this.$emit('checkout')
    },
    formatPrice(val) {
      let dollarUSLocale = Intl.NumberFormat('en-US')

      return dollarUSLocale.format(val)
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-footer {
  margin-top: 68px;
  display: flex;
  justify-content: space-between;

  .additional-comments {
    width: 29%;

    label {
      font-size: 16px;
      line-height: 100%;
      font-weight: 500;
      color: #FFFFFF;
    }

    textarea {
      margin-top: 12px;
      background: #000000;
      border-radius: 6px;
      display: block;
      border: 1px solid #000;
      resize: none;
      width: 100%;
      color: #FFFFFF;
      caret-color: #fff;
      padding: 20px 12px;

      &:focus {
        outline: none;
      }
    }
  }

  .delivery-info {
    width: 25%;

    h3 {
      font-size: 16px;
      line-height: 100%;
      color: #FFFFFF;
      font-weight: 500;
      margin-bottom: 14px;
    }

    p {
      font-size: 16px;
      line-height: 136%;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .checkout {
    width: 21%;

    .subtotal,
    .tax,
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7px;

      .info {
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
      }

      .amount {
        font-size: 16px;
        line-height: 100%;
        color: #FFFFFF;
        font-weight: bold;
      }
    }

    .total {
      background: #000;
    }

    .btn-checkout {
      background: #AE0000;
      border-radius: 6px;
      height: 60px;
      width: 152px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #AE0000;
      font-size: 18px;
      line-height: 100%;
      color: #FFFFFF;
      font-weight: bold;
      margin: 42px auto 20px auto;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background: #920101;

      }
    }

    .bottom-link {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 14px;
        line-height: 100%;
        color: #FFFFFF;

        a {
          border-bottom: 1px solid #fff;
          line-height: 80%;
          cursor: pointer;
        }
      }

    }
  }
}

@media (max-width: 991px){
  .cart-foot{
    column-gap: 5%;
    &>div{
      width:30% !important;
    }
  }
}

@media (max-width: 768px){
  .cart-foot{
    flex-wrap: wrap;
    &>div{
      margin: 20px 0;
      width: 100% !important;
    }
  }
}
</style>
