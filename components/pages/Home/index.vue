<template>
  <div class="home row">
    <interactiveLogo />
    <div class="full-height">
      <interactiveTitle />
      <MusicPlayer />
      <next-section to="#business" class="next-section" animate />
    </div>
    <section id="business">
      <div class="introduction">
        <p class="introduction-content texte">{{ homeData.description }}</p>
      </div>
      <div class="process row justify-content-center">
        <div
          v-for="vision in homeData.vision"
          :key="vision.title"
          class="vision"
        >
          <h2 class="title">{{ vision.title }}</h2>
          <p class="content texte">{{ vision.content }}</p>
        </div>
      </div>
    </section>
    <section class="projects">
      <sectionTitle title="Project overview" sub-title="View all" />
    </section>
    <section class="univers">
      <sectionTitle title="My univers" />
    </section>
  </div>
</template>

<script>
import interactiveLogo from '@/components/pages/Home/interactiveLogo'
import interactiveTitle from '@/components/pages/Home/interactiveTitle'
import MusicPlayer from '@/components/pages/Home/MusicPlayer'
import sectionTitle from '@/components/pages/Home/sectionTitle'
import nextSection from '@/components/generic/nextSection'
export default {
  name: 'Home',
  components: {
    interactiveLogo,
    interactiveTitle,
    MusicPlayer,
    nextSection,
    sectionTitle,
  },
  props: {
    datoData: {
      type: Object,
      default: null,
    },
  },
  computed: {
    homeData() {
      return this.datoData.home
    },
  },
}
</script>
<style lang="scss" scoped>
.full-height {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  .next-section {
    position: absolute;
    bottom: 0;
    margin-bottom: 2%;
  }
}
#business {
  padding-top: 10%;
}
section {
  .introduction {
    display: flex;
    justify-content: center;
    &-content {
      width: 25%;
    }
  }
  .process {
    margin-top: 10%;
    .vision {
      width: 20%;
      margin-right: 6%;
      &:nth-child(2) {
        margin-top: 6%;
      }
      &:last-child {
        margin-right: 0;
        margin-top: 12%;
      }
      .title {
        color: $yellow;
        font-weight: bold;
        font-size: 2em;
      }
      .content {
        margin-top: 2%;
      }
    }
  }
}
</style>
