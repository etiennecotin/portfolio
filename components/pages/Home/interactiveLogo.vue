<template>
  <div class="interactive-logo">
    <logo :lighting="rms" />
  </div>
</template>

<script>
import logo from '@/components/icons/logo'
import { mapGetters } from 'vuex'
export default {
  name: 'InteractiveLogo',
  components: {
    logo,
  },
  data() {
    return {
      ctx: null,
      rms: null,
    }
  },
  computed: {
    ...mapGetters({
      analyser: 'musicPlayer/getAnalyser',
    }),
    isPlaying() {
      return this.$store.state.musicPlayer.playing
    },
    audioDuration() {
      return this.$store.state.musicPlayer.musicBuffer.duration
    },
  },
  watch: {
    isPlaying(actual) {
      if (actual) {
        this.animate()
      }
    },
  },
  mounted() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)()
  },
  methods: {
    animate() {
      const freqDomain = new Uint8Array(this.analyser.frequencyBinCount)
      this.analyser.getByteFrequencyData(freqDomain)
      this.analyser.fftSize = 256
      const bufferLength = this.analyser.frequencyBinCount

      const renderFrame = () => {
        requestAnimationFrame(renderFrame)
        this.analyser.getByteFrequencyData(freqDomain)
        let rms = 0
        for (let i = 0; i < bufferLength; i++) {
          rms += freqDomain[i] * freqDomain[i]
        }
        rms /= bufferLength
        this.rms = Math.sqrt(rms)
      }
      renderFrame()
    },
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
