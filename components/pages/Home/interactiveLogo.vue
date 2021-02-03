<template>
  <div class="interactive-logo">
    <logo />
  </div>
</template>

<script>
import logo from '@/components/icons/logo'
export default {
  name: 'InteractiveLogo',
  components: {
    logo,
  },
}
</script>
<style lang="scss" scoped>
.interactive-logo {
  z-index: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
}
</style>
