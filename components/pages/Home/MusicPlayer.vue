<template>
  <div class="music-player" @click="toggleMusic">
    <transition name="fade" mode="out-in">
      <playSoundIcon v-if="!isPlaying" class="music-player-icon" />
      <stopSoundIcon v-if="isPlaying" class="music-player-icon rotating" />
    </transition>
    <transition name="fade" mode="out-in">
      <span v-if="!isPlaying">Explore in music</span>
      <span v-if="isPlaying">{{ musicData.title }}</span>
    </transition>
  </div>
</template>

<script>
import playSoundIcon from '@/components/icons/playSoundIcon'
import stopSoundIcon from '@/components/icons/stopSoundIcon'
import { mapGetters } from 'vuex'

export default {
  name: 'MusicPlayer',
  components: {
    playSoundIcon,
    stopSoundIcon,
  },
  props: {
    musicData: {
      type: Object,
      default: null,
    },
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
      // ...
    }),
    isPlaying() {
      return this.$store.state.musicPlayer.playing
    },
    musicLoaded() {
      return this.$store.state.musicPlayer.isLoaded
    },
  },
  watch: {
    isPlaying(actual) {
      if (actual) {
        this.dessiner()
        console.log(this.analyser)
      }
    },
  },
  mounted() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)()
    this.$store.commit('musicPlayer/setCtxAudio', this.ctx)
    this.$store.commit('musicPlayer/setMusicData', this.musicData)
    this.$store.dispatch('musicPlayer/loadSound', this.musicData.url)
  },
  methods: {
    toggleMusic() {
      if (this.musicLoaded) {
        this.$store.dispatch('musicPlayer/toggleMusic')
        // this.dessiner()
      }
    },
    dessiner() {
      // const canvas = document.getElementById('oscilloscope')
      // const contexteCanvas = canvas.getContext('2d')

      const freqDomain = new Uint8Array(this.analyser.frequencyBinCount)
      // console.log(freqDomain, this.analyser.frequencyBinCount)
      this.analyser.getByteFrequencyData(freqDomain)
      this.analyser.fftSize = 256
      const bufferLength = this.analyser.frequencyBinCount
      // const WIDTH = 400
      // const HEIGHT = 200
      // const barWidth = (WIDTH / bufferLength) * 2.5
      // let barHeight
      // let x = 0

      const renderFrame = () => {
        requestAnimationFrame(renderFrame)
        this.analyser.getByteFrequencyData(freqDomain)
        let rms = 0
        for (let i = 0; i < bufferLength; i++) {
          rms += freqDomain[i] * freqDomain[i]
        }
        rms /= bufferLength
        this.rms = Math.sqrt(rms)

        // x = 0
        // this.analyser.getByteFrequencyData(freqDomain)
        // contexteCanvas.fillStyle = '#000'
        // contexteCanvas.fillRect(0, 0, WIDTH, HEIGHT)
        // for (let i = 0; i < bufferLength; i++) {
        //   barHeight = freqDomain[i]
        //
        //   const r = barHeight + 25 * (i / bufferLength)
        //   const g = 250 * (i / bufferLength)
        //   const b = 50
        //   contexteCanvas.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
        //   contexteCanvas.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)
        //   x += barWidth + 1
        // }
      }
      renderFrame()
    },
  },
}
</script>
<style lang="scss" scoped>
.music-player {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 5%;
  margin-bottom: 3%;
  border: 1px solid $white;
  border-radius: 50px;
  padding: 0.5% 2%;
  display: flex;
  align-items: center;
  width: auto;
  flex: 1 0 auto;
  justify-content: center;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  &-icon {
    margin-right: 5%;
    width: 20px;
  }
  span {
    color: $white;
    font-size: 1em;
    font-weight: 200;
  }
  & > * {
    flex: 1 0 auto;
  }
}
</style>
