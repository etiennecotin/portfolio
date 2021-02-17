<template>
  <footer>
    <div>
      <h3 class="before-form">{{ $t('footer.contact.label') }}</h3>
      <div class="contact row d-flex">
        <div class="infos col-3">
          <p>+33 6 20 31 86 60</p>
          <p>etienne.cotin@gmail.com</p>
        </div>
        <p class="separator"></p>
        <div class="contact-form col-3">
          <label>
            <input
              v-model="emailAddress"
              type="email"
              :placeholder="$t('footer.contact.input-placeholder')"
            />
          </label>
          <button type="submit">{{ $t('footer.contact.submit') }}</button>
        </div>
        <!--        <p>-->
        <!--          En renseignant votre adresse email, vous acceptez de recevoir notre-->
        <!--          newsletter Digital Garden. Vous bénéficiez d'un droit d’accès, de-->
        <!--          rectification et d'opposition. Pour plus d'information sur vos droits-->
        <!--          informatique & Liberté cliquez ici-->
        <!--        </p>-->
      </div>
      <div class="content row">
        <div class="col align-self-start">
          <p>Mentions légales</p>
        </div>
        <div class="links col-2 align-self-end justify-content-end">
          <p>Insta</p>
          <p>IN</p>
          <p>PI</p>
        </div>
      </div>
      <div class="bottom-footer">
        <p class="copyright">
          © 2021, Etienne Cotin - Développeur freelance web à Nantes | Business
          développement & création d'applications web sur-mesure
        </p>
        <div class="lang">
          <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
          <nuxt-link :to="switchLocalePath('fr')">FR</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      emailAddress: '',
    }
  },
}
</script>
<style lang="scss" scoped>
footer {
  position: relative;
  z-index: 50;
  padding: 0 15%;
  font-size: 0.9em;
  font-weight: 200;
  .before-form {
    font-family: $serif-font-family;
    font-size: 3em;
    font-weight: 400;
    margin: 3% 0 4%;
    color: $yellow;
    text-align: center;
  }
  .contact {
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
    //flex-direction: column;
    align-items: center;
    .infos {
      font-size: 1.3em;
      margin: 1% 0;
      text-align: left;
      font-weight: 300;
      p {
        margin: 5% 0;
      }
    }
    .separator {
      border-right: 1px solid white;
      height: 120px;
      margin: 0 2%;
      width: 1px;
      padding: 0;
    }
    &-form {
      display: flex;
      //width: 30%;
      label {
        margin-right: 2%;
        width: 100%;
        input {
          border: 1px solid $white;
          border-radius: 4px;
          height: 50px;
          line-height: normal;
          color: $white;
          background-color: transparent;
          display: block;
          width: 100%;
          padding-left: 12px;
          box-sizing: border-box;
          -webkit-user-select: auto;
          -moz-user-select: auto;
          -ms-user-select: auto;
          user-select: auto;
          font-size: 14px;
          transition: box-shadow ease-in-out 0.25s;
          &:focus {
            outline: 0;
            box-shadow: 0 0 1px 3px $blue;
          }
        }
      }
      button {
        background: $white;
        border: 2px solid $white;
        border-radius: 4px;
        //color: #fff;
        color: $blue;
        display: inline-block;
        font-family: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1em;
        //font-weight: 300;
        font-weight: 700;
        padding: 0.5em 1.2em;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        transition: all 0.15s ease;
        vertical-align: middle;
        z-index: 1;
        cursor: pointer;
      }
    }
  }
  .content {
    display: flex;
    margin-top: 3%;
    margin-bottom: 1%;
    .links {
      display: flex;
      p {
        margin: 0 3%;
      }
    }
  }
  .bottom-footer {
    padding: 1% 0 2%;
    border-top: 1px solid white;
    display: flex;
    justify-content: space-between;
    a {
      color: $blue;
      text-decoration: none;
      font-weight: 400;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
