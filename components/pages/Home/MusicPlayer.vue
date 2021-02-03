<template>
  <div class="music-player" @click="playMusic">
    <playSoundIcon class="music-player-icon" />
    <span>Explorer in music</span>
  </div>
</template>

<script>
import playSoundIcon from '@/components/icons/playSoundIcon'
export default {
  name: 'MusicPlayer',
  components: {
    playSoundIcon,
  },
  methods: {
    playMusic() {
      console.log('play')
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
  width: auto;
  flex: 1 0 auto;
  justify-content: center;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  &-icon {
    margin-right: 5%;
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
