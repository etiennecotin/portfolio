<template>
  <section class="univers">
    <sectionTitle :title="$t('section.my-univers.title')" />
    <div class="content d-flex justify-content-center">
      <musicIcon />
      <div class="description-links col-4">
        <p class="texte" :v-html="myUnivers"></p>
        <div class="links">
          <nextSection
            :to="spotifyUrl"
            :title="$t('section.my-univers.links.spotify-link')"
            class="col-6"
          />
          <nextSection
            :to="instagramUrl"
            :title="$t('section.my-univers.links.instagram-link')"
            class="col-6"
          />
        </div>
      </div>
      <audioSpeakerIcon />
    </div>
  </section>
</template>

<script>
import sectionTitle from '@/components/pages/Home/sectionTitle'
import musicIcon from '@/components/icons/musicIcon'
import audioSpeakerIcon from '@/components/icons/audioSpeakerIcon'
import nextSection from '@/components/generic/nextSection'
export default {
  name: 'MyUniversSection',
  components: {
    sectionTitle,
    musicIcon,
    audioSpeakerIcon,
    nextSection,
  },
  props: {
    myUnivers: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      instagramUrl: 'https://www.instagram.com/dourito_festival/',
      spotifyUrl:
        'https://open.spotify.com/user/deamdecoy?si=aMOBv6KKTQ68aJmrVMgw5A',
    }
  },
}
</script>
<style lang="scss" scoped>
.content {
  margin-top: 10%;
  .description-links {
    margin: 0 5%;
    .links {
      margin-top: 20%;
      display: flex;
    }
  }
}
</style>
