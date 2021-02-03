<template>
  <div class="display-icon">
    <component :is="icon"></component>
  </div>
</template>

<script>
export default {
  name: 'DisplayIcon',
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped></style>
