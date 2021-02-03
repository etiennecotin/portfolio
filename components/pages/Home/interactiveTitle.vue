<template>
  <div class="interactive-title">
    <div class="point"></div>
    <h2 v-html="actualWord"></h2>
  </div>
</template>

<script>
export default {
  name: 'InteractiveTitle',
  data() {
    return {
      loop: null,
      loopSpeed: 2500,
      words: ['Lead<br/>Developer', 'Music<br/>Lover', 'Web<br/>Developer'],
      activeWord: 0,
    }
  },
  computed: {
    actualWord() {
      return this.words[this.activeWord]
    },
  },
  mounted() {
    this.loop = setInterval(() => {
      this.changeWord()
    }, this.loopSpeed)
  },
  beforeDestroy() {
    clearInterval(this.loop)
  },
  methods: {
    changeWord() {
      if (this.activeWord < this.words.length - 1) {
        this.activeWord = this.activeWord + 1
      } else {
        this.activeWord = 0
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.interactive-title {
  display: flex;
  align-items: center;
  width: 40%;
  .point {
    width: 35px;
    height: 35px;
    background-color: $blue;
    border-radius: 20px;
    margin-right: 8%;
    flex: 0 0 auto;
  }
  h2 {
    font-family: $serif-font-family;
    font-weight: bold;
    font-size: 109px;
  }
}
</style>
