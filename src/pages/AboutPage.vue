<template>
  <div>
    <section class="info-main container">
      <h2>About Me</h2>
      <div class="about-wrapper">
        <q-img class="about-photo" src="../img/my-photo.jpg" />
        <div class="text-white info-text">
          <div>
            <span>Name: Alexander</span>
            <span>Surname: Chumaslov</span>
            <span>Age:40</span>
            <span>Citizenship: Russian Federation</span>
            <span>Languages: Russian, English, Arabic</span>
          </div>
          <div>
            <span>Marital Status: Married</span>
            <span>Workplace: NDA</span>
            <span>Current Address: Turkey, Istanbul</span>
            <span>Phone Number: +905073178079</span>
            <span>
              GitHub:
              <a
                href="https://github.com/TatweerDev"
                target="_blank"
                rel="noopener"
                class="text-white info-link"
              >
                https://github.com/TatweerDev
              </a>
            </span>
          </div>
        </div>
      </div>

      <a :href="cvLink" target="_blank" class="text-white cv-button" download
        ><q-btn
          outline
          rounded
          target="_blank"
          color="red"
          label="Download CV"
          style="width: 200px; font-size: 18px"
      /></a>
    </section>
    <section class="skills-main container">
      <h2>My Skills</h2>
      <div class="text-wrapper">
        <span class="skills-text">
          For my work, I use
          <span class="text-red">HTML, CSS, and JavaScript.</span> I write code
          in native <span class="text-red">JavaScript (ES7)</span> as well as in
          frameworks, primarily
          <span class="text-red">Vue.js (Vue2, Vue3)</span>, and also
          <span class="text-red">Quasar</span> and
          <span class="text-red">jQuery.</span> In
          <span class="text-green">Vue</span>, I have experience with
          <span class="text-green"
            >REST API, Vuex, Pinia, Router, Service Worker</span
          >
          and other libraries. I have also developed universal web and mobile
          applications - <span class="text-red">PWA</span> using
          <span class="text-red">Quasar</span>. Naturally, I confidently use
          <span class="text-red">GIT, SASS, LESS, Webpack, Gulp, Node</span> and
          other essential technologies needed today for development. I have
          experience working in a team. Additionally, I have worked with CMS
          systems such as WordPress. I work with templates from Photoshop,
          Zeplin, Figma, and more. I am always moving forward, learning new
          technologies and skills, and I can communicate well within a team.
          That's about it...
        </span>
      </div>
      <ul class="progress">
        <li v-for="(el, index) in skills" :key="index" class="progress-item">
          <radial-progress-bar
            :diameter="220"
            :completed-steps="el.progress"
            :total-steps="totalSteps"
            startColor="#f44336"
            stopColor="#c71104"
            class="progress-bar"
          >
            <p class="text-white progress-number">{{ el.progress }} %</p>
            <p
              class="text-white progress-stack"
              style="font-size: 20px; font-weight: bold"
            >
              {{ el.stack }}
            </p>
          </radial-progress-bar>
        </li>
      </ul>
    </section>
    <section class="certificates container">
      <h2>My Certificates</h2>
      <div class="certificates-images">
        <a href="../img/1.2.jpg" target="_blank"
          ><q-img class="certificate-item" src="../img/1.2.jpg"
        /></a>
        <a href="../img/2.1.jpg" target="_blank"
          ><q-img class="certificate-item" src="../img/2.1.jpg"
        /></a>
        <a href="../img/2.2.jpg" target="_blank"
          ><q-img class="certificate-item" src="../img/2.2.jpg"
        /></a>
      </div>
    </section>
    <page-contacts />
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
import PageContacts from "src/components/PageContacts.vue";

export default {
  components: { RadialProgressBar, PageContacts },
  data() {
    return {
      skills: [
        {
          stack: "JavaScript",
          progress: 90,
        },
        {
          stack: "Vue.js",
          progress: 95,
        },
        {
          stack: "HTML",
          progress: 95,
        },
        {
          stack: "CSS",
          progress: 95,
        },
        {
          stack: "Quasar",
          progress: 90,
        },
        {
          stack: "JQuerry",
          progress: 85,
        },
      ],
      html: 95,
      totalSteps: 100,
    };
  },
  computed: {
    cvLink() {
      return require("../img/cv.png");
    },
  },
};
</script>

<style lang="sass" scoped>
.info-main
  padding: 20px
  margin-bottom: 40px

.certificates h2,
.skills-main h2,
.info-main h2
  color: #fff
  font-size: 40px
  font-weight: bold
  text-align: center
  margin: 20px 0 40px 0

.certificates h2,
.skills-main h2
  padding: 30px 0
  margin: 0 20px
  display: block
  border-top: 1px solid #fff
  border-bottom: 1px solid #fff

.info-text
  margin-top: 20px
  @media (min-width: $tablet-width)
    display: flex
    flex-direction: row
    justify-content: space-around
  @media (min-width: $desktop-width)
    margin-left: 20px
  @media (min-width: $widescreen-width)
    flex-grow: 2

.info-text div span
  display: block
  font-size: 16px
  margin-bottom: 10px
  @media (min-width: $tablet-width)
    font-size: 17px
  @media (min-width: $desktop-width)
    margin-bottom: 20px
  @media (min-width: $widescreen-width)
    font-size: 19px
    margin-bottom: 35px

.info-link
  text-decoration: none
  &:hover
    text-decoration: underline

.text-wrapper
  margin-top: 20px
  padding: 15px
  @media (min-width: $widescreen-width)
    margin-top: 50px

.skills-text
  font-size: 16px
  line-height: 30px
  color: #fff
  @media (min-width: $tablet-width)
    font-size: 18px
    line-height: 35px

.cv-button
  display: flex
  margin-top: 20px
  width: fit-content
  text-decoration: none
  @media (min-width: $tablet-width)
    margin: 30px auto 0 25px
  @media (min-width: $desktop-width)
    margin: -65px 0 0 385px
  &:hover
    color: #fff !important
  @media (min-width: $widescreen-width)
    margin: -90px 0 0 525px
    width: 200px
    height: 75px
    font-size: 20px
    border-radius: 40px

.progress
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: space-between
  padding: 20px
  align-items: center
  @media (min-width: $tablet-width)
    flex-direction: row
    flex-wrap: wrap
  @media (min-width: $desktop-width)
    width: 900px
    margin: 0 auto
  @media (min-width: $widescreen-width)
    width: 100%
    margin: 50px 0

.progress li
  margin-bottom: 20px

.progress-number
  font-size: 18px
  margin-bottom: 0

.progress-stack
  font-size: 20px
  font-weight: bold
  margin-bottom: 0

.certificates-images
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: space-between
  margin-top: 30px
  padding: 15px
  @media (min-width: $tablet-width)
    flex-direction: row

.certificate-item
  margin-bottom: 30px
  @media (min-width: $tablet-width)
    width: 230px
  @media (min-width: $widescreen-width)
    width: 350px
  &:hover
    opacity: 0.7

.about-wrapper
  display: flex
  flex-direction: column
  min-height: 600px
  @media (min-width: $desktop-width)
    flex-direction: row
    justify-content: space-between

.about-photo
  @media (min-width: $tablet-width)
    margin: 0 auto
    width: 400px
  @media (min-width: $desktop-width)
    width: 350px
  @media (min-width: $widescreen-width)
    width: 400px
    flex-grow: 1
</style>
