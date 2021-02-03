<template>
  <header class="row justify-content-between">
    <div class="col-4 justify-content-start">
      <h1>Etienne Cotin</h1>
    </div>
    <div
      class="col-4 d-flex justify-content-end align-self-center social-links"
    >
      <a v-for="link in social" :key="link.type" :href="link.url">
        <display-icon icon="LinkedinIcon"></display-icon>
      </a>
    </div>
  </header>
</template>

<script>
import displayIcon from '@/components/generic/displayIcon'
export default {
  name: 'Header',
  components: {
    displayIcon,
  },
  data() {
    return {
      social: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/etiennecotin/' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
header {
  padding: 0 5%;
  position: fixed;
  width: 100%;
  margin-top: 2%;
  z-index: 10;
  h1 {
    font-size: 2em;
    font-weight: 200;
  }
  .social-links {
    //justify-content: flex-end;
  }
}
</style>
