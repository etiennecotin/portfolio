<template>
  <div class="goToBtn">
    <a :href="to">
      <ArrowRightIcon class="arrow-icon" :class="{ animate: animate }" />
      <span>{{ title }}</span>
    </a>
  </div>
</template>

<script>
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'
export default {
  name: 'NextSection',
  components: {
    ArrowRightIcon,
  },
  props: {
    to: {
      type: String,
      default: '#',
    },
    title: {
      type: String,
      default: 'Discover me',
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.goToBtn {
  display: block;
  &:hover {
    cursor: pointer;
    a {
      .arrow-icon {
        &.animate {
          animation: 0.2s ease;
        }
        transform: translateX(8px);
      }
    }
  }
  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    .arrow-icon {
      width: 50px;
      transition: transform 0.2s;
      transition-timing-function: ease;
      &.animate {
        animation: 8s ease infinite bounce;
      }
    }
    span {
      font-weight: bold;
      color: $white;
      text-decoration: none;
    }
  }
  &.subtitle {
    .arrow-icon {
      color: $blue;
    }
    span {
      color: $blue;
    }
  }
}
</style>
