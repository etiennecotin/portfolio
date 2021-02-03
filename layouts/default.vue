<template>
  <div class="content">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style scoped>
.content {
  width: 100%;
  height: 100vh;
}
</style>
