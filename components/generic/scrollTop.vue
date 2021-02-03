<template>
  <div class="scroll-top" :class="{ active: showScrollTop }" @click="scrollTop">
    <ArrowTopIcon />
  </div>
</template>

<script>
import ArrowTopIcon from '~/components/icons/ArrowTopIcon'
export default {
  name: 'ScrollTop',
  components: {
    ArrowTopIcon,
  },
  data() {
    return {
      scrollPosition: null,
      windowHeight: null,
    }
  },
  computed: {
    showScrollTop() {
      return this.scrollPosition > this.windowHeight * 0.1
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
    this.windowHeight = document.documentElement.scrollHeight
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>
<style lang="scss" scoped>
.scroll-top {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 5%;
  margin-bottom: 3%;
  border: 1px solid $white;
  border-radius: 50%;
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  &.active {
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>
