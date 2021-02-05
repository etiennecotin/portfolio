<template>
  <div class="content">
    <Header />
    <Nuxt />
    <scrollTop />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import scrollTop from '~/components/layout/scrollTop'
export default {
  components: {
    Header,
    Footer,
    scrollTop,
  },
  mounted() {
    this.$store.commit('setLoading', true)
  },
}
</script>
<style scoped>
.content {
  width: 100%;
  height: 100vh;
}
</style>
