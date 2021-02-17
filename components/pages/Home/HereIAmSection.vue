<template>
  <section class="here-i-am">
    <sectionTitle :title="$t('section.here-i-am.title')" />
    <div class="background-full-width">
      <datocms-image :data="data.responsiveImage" class="img-bg" />
      <div class="filtre"></div>
      <div class="call-to-action">
        <div class="content">
          <h3>Got a project?</h3>
          <h3>Let’s build something together.</h3>
        </div>
        <button>
          <ArrowRightIcon class="icon" />
          <span>{{ $t('section.here-i-am.call-to-action') }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import sectionTitle from '@/components/pages/Home/sectionTitle'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'
import { Image } from 'vue-datocms'
export default {
  name: 'HereIAmSection',
  components: {
    'datocms-image': Image,
    sectionTitle,
    ArrowRightIcon,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss">
.background-full-width {
  width: calc(100vw - #{$scroll-bar});
  margin: 1% calc(-50vw + 50% + #{$scroll-bar / 2});
  position: relative;
  .img-bg {
    height: 70vh;
    width: 100%;
    picture img {
      height: 100%;
      object-fit: cover;
      object-position: 50% 62%;
    }
  }
  .filtre {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(3, 8, 18, 0.6);
  }
  .call-to-action {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    top: 0;
    flex-direction: column;
    .content {
      font-size: 2em;
      margin-bottom: 2%;
      text-align: center;
      h3 {
        margin: 3% 0;
        font-weight: 700;
      }
    }
    button {
      border: 2px solid $white;
      background: transparent;
      padding: 2% 5%;
      font-size: 18px;
      color: white;
      outline: 0;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      text-indent: 15px;
      cursor: pointer;
      border-radius: 4px;
      transition: 0.3s;
      svg {
        transition: transform 0.2s;
        transition-timing-function: ease;
      }
      &:hover {
        border: 2px solid $blue;
        svg {
          transform: translateX(40%);
        }
      }
    }
  }
}
</style>
