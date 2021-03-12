<template>
  <div class="home row">
    <interactiveLogo />
    <div class="full-height">
      <interactiveTitle />
      <MusicPlayer :music-data="homeData.music" />
      <!--      <p>-->
      <!--        <input-->
      <!--          v-model="vol"-->
      <!--          type="range"-->
      <!--          min="0"-->
      <!--          max="100"-->
      <!--          value="50"-->
      <!--          :onchange="changeVolume()"-->
      <!--        />-->
      <!--        Volume-->
      <!--      </p>-->
      <next-section
        to="business"
        class="next-section"
        :title="$t('section.principal.view-more')"
        scrollTo
        animate
      />
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
    <ProjectsSection :projects="datoData.allWebProjects"></ProjectsSection>
    <MyUniversSection :my-univers="homeData.myUnivers" />
    <here-i-am-section :data="homeData.hereIAmBackground" />
  </div>
</template>

<script>
import interactiveLogo from '@/components/pages/Home/interactiveLogo'
import interactiveTitle from '@/components/pages/Home/interactiveTitle'
import MusicPlayer from '@/components/pages/Home/MusicPlayer'
import MyUniversSection from '@/components/pages/Home/MyUniversSection'
import HereIAmSection from '@/components/pages/Home/HereIAmSection'
import nextSection from '@/components/generic/nextSection'
import ProjectsSection from '~/components/pages/Home/ProjectsSection'

export default {
  name: 'Home',
  components: {
    interactiveLogo,
    interactiveTitle,
    MusicPlayer,
    nextSection,
    MyUniversSection,
    HereIAmSection,
    ProjectsSection,
  },
  props: {
    datoData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      vol: 50,
    }
  },
  computed: {
    homeData() {
      return this.datoData.home
    },
  },
  methods: {
    changeVolume() {
      this.$store.commit('musicPlayer/changeVol', this.vol)
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
      width: 30%;
    }
  }
  .process {
    margin-top: 10%;
    .vision {
      width: 22%;
      margin-right: 3%;
      margin-left: 3%;
      &:nth-child(2) {
        margin-top: 6%;
      }
      &:last-child {
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
