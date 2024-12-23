<template>
  <q-page class="bg-primary text-white">
    <div class="info-wrapper container">
      <q-img src="../img/photo1.png" class="custom-image" />
      <div class="relative">
        <span class="descr">
          My name is Alexander, and I am a
          <span class="text-red">Frontend Developer.</span> I work with
          <span class="text-red">Vue.js</span> and
          <span class="text-red">Quasar</span>, as well as other JavaScript
          frameworks. I have experience in commercial web application
          development, including SPA, PWA, Android, and iOS applications... I
          speak Russian, English, and Arabic. Welcome to my portfolio =)
        </span>
        <router-link
          class="text-red absolute-bottom-right link-more"
          to="/about"
        >
          Learn more...
        </router-link>
      </div>
    </div>

    <section class="projects container">
      <h2>My Projects</h2>
      <ul class="projects-list-short">
        <li v-for="(el, index) in projects" :key="index">
          <a
            :href="el.link"
            class="text-red project-link"
            target="_blank"
            rel="noopener"
          >
            <q-img :src="el.img" :ratio="2 / 1" />
            <span class="project-descr"
              ><span class="text-red">{{ el.title }}</span
              >{{ el.descr }}</span
            >
          </a>
        </li>
      </ul>
      <router-link class="text-red link-projects" to="/projects">
        View all my works...
      </router-link>
    </section>
    <page-contacts />
  </q-page>
</template>

<script>
import PageContacts from "src/components/PageContacts.vue";

export default {
  components: { PageContacts },
  data() {
    return {
      projects: [
        {
          title: "STIHL USA",
          descr: "Tool sales portal",
          link: "https://www.stihlusa.com/",
          img: require("../img/stihl.png"),
        },
        {
          title: "Zaptest",
          descr: "Corporate website for an IT company",
          link: "https://www.zaptest.com/",
          img: require("../img/zaptest.png"),
        },
        {
          title: "Fiqh Academy",
          descr: "Online school",
          link: "https://fiqhacademy.ru/",
          img: require("../img/fa.png"),
        },
        {
          title: "Kavkaz.top",
          descr: "Information and news portal",
          link: "https://kavkaz.top/",
          img: require("../img/kavkaz.png"),
        },
        {
          title: "EIOS",
          descr: "Information environment for students and teachers",
          link: "https://eios.netlify.app/",
          img: require("../img/eios.png"),
        },
        {
          title: "Pink",
          descr: "Website for a mobile application",
          link: "https://pink-desktop.netlify.app/",
          img: require("../img/pink.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>

.custom-image
  @media (min-width: $tablet-width)
    width: 270px
  @media (min-width: $desktop-width)
    width: 370px
    order: 2
  @media (min-width: $widescreen-width)
    width: 500px

.descr
  display: inline-block
  margin-top: 10px
  padding: 15px
  font-size: 18px
  @media (min-width: $tablet-width)
    width: 450px
  @media (min-width: $desktop-width)
    width: 550px
    font-size: 20px
    line-height: 30px
    padding: 0
    margin-top: 50px
  @media (min-width: $widescreen-width)
    width: 840px
    font-size: 24px
    line-height: 40px

.projects
  margin: 40px 0 20px 0
  @media (min-width: $tablet-width)
    margin: auto

.projects h2
  font-size: 40px
  font-weight: bold
  text-align: center
  margin: 10px 0 40px 0
  @media (min-width: $widescreen-width)
    font-size: 45px
    margin-top: 30px

.relative
  position: relative
  padding-bottom: 30px

.link-more
  font-size: 18px
  right: 15px !important
  @media (min-width: $widescreen-width)
    font-size: 21px
  &:hover
    opacity: 0.7
    text-decoration: none

.link-projects
  width: 100%
  display: block
  margin: 40px 0
  text-align: center
  @media (min-width: $widescreen-width)
    font-size: 20px
  &:hover
    opacity: 0.7
    text-decoration: none

.project-descr
  display: flex
  flex-direction: column
  margin: 20px 0
  font-size: 16px
  text-align: center
  padding: 0 10px
  color: #fff
  &:hover
    opacity: 0.7

.project-link
  text-decoration: none

.project-link div:hover
  opacity: 0.7

.info-wrapper
  @media (min-width: $tablet-width)
    padding: 15px
    display: flex
    flex-direction: row
    justify-content: space-between

.projects-list-short
  @media (min-width: $tablet-width)
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    padding: 15px

.projects-list-short li
  @media (min-width: $tablet-width)
    width: 350px
  @media (min-width: $desktop-width)
    width: 450px
</style>
