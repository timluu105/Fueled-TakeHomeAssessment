<template>
  <div class="cart-table">
    <div class="cart-table__header">
      <div class="header-cell">
        Product Name
      </div>
      <div class="header-cell">
        Price
      </div>
      <div class="header-cell">
        Quantity
      </div>
      <div class="header-cell">
        Remove
      </div>
    </div>
    <transition-group name="list" tag="div" class="cart-table__body">
      <div v-for="(prod, i) in items" :key="prod.id" class="product-row">
        <div class="product-title">
          <img :src="prod.img" alt="">
          <div>
            <h4>{{ prod.title }}</h4>
            <span>{{ prod.id }}</span>
          </div>
        </div>
        <div>
          ${{ formatPrice(prod.price) }}
        </div>
        <div class="quantity">
          <input v-model="quantities[i]" type="number">
          <span @click="updateQuantity(prod.id, quantities[i])">Update</span>
        </div>
        <div>
          <span class="icon-close" @click="removeItem(prod.id)">
            <svg fill="none" height="17" viewBox="0 0 18 17" width="18" xmlns="http://www.w3.org/2000/svg">
              <line stroke="white" stroke-width="2" x1="1.70711" x2="16.7071" y1="1.29289" y2="16.2929"/>
              <line stroke="white" stroke-width="2" x1="1.29289" x2="16.2929" y1="16.2929" y2="1.29289"/>
            </svg>
          </span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'CartTable',
  props: {
    cartItems: {
      type: Array,
    },
  },
  data() {
    return {
      items: this.cartItems,
      quantities: [],
    };
  },
  methods: {
    updateQuantity(id, quantity) {
      this.$emit('updateQuantity', {id, quantity});
    },
    removeItem(id){
      this.$emit('removeItem', id);
    },
    formatPrice(val){
      const dollarUSLocale = Intl.NumberFormat('en-US');

      return dollarUSLocale.format(val)
    }
  },
  mounted() {
    this.items.forEach(item => {
      this.quantities.push(item.quantity);
    });
  },
};
</script>

<style lang="scss" scoped>
.cart-table {
  margin-top: 80px;

  .cart-table__header {
    background: #0B0B0B;
    border-radius: 6px;
    height: 46px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;

    .header-cell {
      font-size: 16px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: center;
    }
  }

  .cart-table__body {
    .product-row {
      border-radius: 6px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;

      &:nth-child(even) {
        background: #0B0B0B;

        & > div {
          input {
            background: linear-gradient(0deg, #1B1B1B, #1B1B1B);
          }
        }
      }

      &:nth-child(odd) {
        padding: 26px 0;
      }

      .product-title {
        display: flex;
        column-gap: 20px;

        img {
          height: 110px;
          width: 110px;
          object-fit: cover;
          border-radius: 6px;
        }

        & > div {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        h4 {
          font-size: 20px;
          line-height: 100%;
          color: #FFFFFF;
          margin-bottom: 9px;
          font-weight: 500;
          text-align: left;
        }

        span {
          font-size: 16px;
          line-height: 100%;
          color: rgba(255, 255, 255, 0.6);
          text-align: left;

        }
      }

      & > div {
        text-align: center;
        color: #FFFFFF;
        font-size: 20px;
        line-height: 100%;

        input {
          height: 46px;
          width: 46px;
          border: none;
          background: #000000;
          border-radius: 6px;
          caret-color: #fff;
          color: #fff;
          padding: 4px;
          text-align: center;

          &:focus {
            outline: none;
          }

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          &[type=number] {
            -moz-appearance: textfield;
          }
        }

        .icon {
          cursor: pointer;
        }

        &.quantity {
          display: flex;
          align-items: center;
          column-gap: 10px;
          justify-content: center;

          span {
            //text-decoration: underline;
            line-height: 16px;
            font-size: 14px;
            border-bottom: 1px solid #fff;
            cursor: pointer
          }
        }

        .icon-close {
          cursor: pointer;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .cart-table .cart-table__body {
    .product-row {
      .product-title {
        img {
          width: 50px;
          height: 50px;
        }

        h4 {
          font-size: 16px;
        }

        span {
          font-size: 13px;
        }
      }
    }
  }
}

@media (max-width: 560px) {
  .cart-table .cart-table__body {
    .product-row {
      padding: 12px !important;

      .product-title {
        img {
          display: none;
        }
      }

      .quantity {
        flex-direction: column;
        row-gap: 12px;
      }
    }
  }
}

//LIST TRANSITIONS
.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
