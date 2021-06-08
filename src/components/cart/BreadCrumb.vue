<template>
  <div class="breadcrumb">
    <div v-for="(item, index) in breadcrumbs" :key="item.title">
      <span>{{ item.title }}</span>
      <span class="icon" v-if="index !== breadcrumbs.length - 1">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.88 4.54L6.2 8.5H4.86L7.08 5.1H0.48V4H7.08L4.86 0.62H6.2L8.88 4.54Z" fill="white"/>
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadcrumbs: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  height: 47px;
  background: #0B0B0B;
  border-radius: 6px;
  display: flex;
  padding: 15px 13px;
  column-gap: 5px;

  span {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
