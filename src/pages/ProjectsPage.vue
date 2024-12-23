<template>
  <section class="text-white">
    <div class="container">
      <h2>Оцените некоторые мои работы</h2>
      <h3 class="text-red tip">
        *некоторые проекты могут не открываться по причине отсутствия поддержки
        хостинга клиентом. Некоторые я делал довольно давно
      </h3>
      <ul class="projects-list">
        <li v-for="(item, index) in info" :key="index">
          <h3>{{ item.header }}</h3>
          <div class="content-wrapper">
            <a :href="item.link" target="_blank"
              ><q-img :src="item.imageSrc" class="projects-image"
            /></a>
            <span class="project-descr" v-html="item.descr" />
          </div>
        </li>
      </ul>
    </div>
    <page-contacts />
  </section>
</template>

<script>
import PageContacts from "src/components/PageContacts.vue";

export default {
  components: { PageContacts },
  data() {
    return {
      info: [
        {
          link: "https://www.stihlusa.com/",
          header: "STIHL USA",
          imageSrc: require("../img/stihl.png"),
          descr:
            'A portal for selling tools for a large American company. As part of a large team, I migrated the site from <span class="text-red">Oracle</span> to <span class="text-red">Vue.js</span>. The site architecture was built according to Angular standards. The project also used <span class="text-red">Typescript</span>. I collaborated with the client\'s team, including designers, project managers, and backend developers.',
        },
        {
          link: "https://www.zaptest.com/",
          header: "Zaptest",
          imageSrc: require("../img/zaptest.png"),
          descr:
            'A corporate website for an American IT company. As part of the team, I rebuilt the site from scratch using <span class="text-red">Vue.js</span>.',
        },
        {
          link: "https://fiqhacademy.ru/",
          header: "Fiqh Academy",
          imageSrc: require("../img/fa.png"),
          descr:
            'A website for online courses. Features include test completion, profile customization, CAPTCHA, etc. A <span class="text-red">SPA</span> created solely by me using <span class="text-red">Quasar.</span> I used <span class="text-red">Vuex, Router, Rest API</span>. The backend was built with Django.',
        },
        {
          link: "https://kavkaz.top/",
          header: "Kavkaz.top",
          imageSrc: require("../img/kavkaz.png"),
          descr:
            'A multilingual (Ru, Eng, Tr) information and news portal. A <span class="text-red">SPA</span> built using <span class="text-red">Vue.js.</span> I utilized <span class="text-red">Vuex, Router, Rest API</span>. The backend was implemented with Django.',
        },
        {
          link: "https://barbium.com/",
          header: "Tatweer Development Studio",
          imageSrc: require("../img/tat.jpg"),
          descr:
            '<span class="text-red">SPA</span> - a website for a web development studio. Built with <span class="text-red">Vue.js.</span> The site includes authentication, message exchange functionality, and uses <span class="text-red">Vuex, Router, Rest API</span>.',
        },
        {
          link: "https://photograf.itdak.pro/#/",
          header: "Photograf",
          imageSrc: require("../img/photograf.png"),
          descr:
            '<span class="text-red">PWA</span> - a website and mobile application for photography enthusiasts. Built using <span class="text-red">Quasar + Vue.js.</span> The app has desktop versions for Windows, Linux, and Mac, as well as mobile apps for Android and iOS. The site includes a <span class="text-red">Service Worker</span>.',
        },
        {
          link: "https://eios.netlify.app/",
          header: "EIOS - Electronic Information and Educational Environment",
          imageSrc: require("../img/eios.png"),
          descr:
            'A small <span class="text-red">SPA</span> prototype for storing information about the educational process for students and teachers. Built with <span class="text-red">Vue.js.</span> Desktop-only version (non-responsive design).',
        },
        {
          link: "https://mthvatan.com/",
          header: "MTH - Vatanci",
          imageSrc: require("../img/vatan.png"),
          descr:
            "An information and news portal. Built with the WordPress CMS.",
        },
        {
          link: "https://shakur-textile.com/",
          header: "Shakur Textile",
          imageSrc: require("../img/shakur.jpg"),
          descr:
            "An online store for women's Islamic clothing. Built with WordPress. Integrated with the Swift payment system.",
        },
        {
          link: "https://pink-desktop.netlify.app",
          header: "Pink - Website for a Mobile Application",
          imageSrc: require("../img/pink.jpg"),
          descr:
            'A website for a mobile application for photography enthusiasts. Built using <span class="text-red">HTML, CSS</span>.',
        },
        {
          link: "https://pink-desktop.netlify.app",
          header: "Kekstagram",
          imageSrc: require("../img/kekstagram.jpg"),
          descr:
            'A website for uploading photos. Includes an option to apply masks to photos before uploading. Built with <span class="text-red">HTML, CSS, and JS</span>.',
        },
        {
          link: "https://tasks-manager-app.netlify.app",
          header: "Taskmanager",
          imageSrc: require("../img/taskmanager.png"),
          descr:
            'A simple SPA - ToDo application. Built with native <span class="text-red">JS</span>.',
        },
        {
          link: "https://spares-shop.netlify.app/home.html",
          header: "Spares Shop",
          imageSrc: require("../img/Spares.jpg"),
          descr:
            'An online shop for auto parts. Built with <span class="text-red">HTML, CSS, and JS</span> with love. Also, I used <span class="text-red">JQuery</span> in this project.',
        },
        {
          link: "https://kvast.netlify.app",
          header: "Kvast",
          imageSrc: require("../img/Kvast.jpg"),
          descr:
            "A simple single-page landing for a company selling kvass. Desktop-only version.",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.text-white h2
  color: #fff
  font-size: 40px
  font-weight: bold
  text-align: center
  margin: 40px 0

.projects-list
  @media (min-width: $tablet-width)
    padding: 15px

.projects-list li
  padding-bottom: 40px
  border-bottom: 1px solid #fff

.projects-list li h3
  font-size: 30px
  line-height: 30px
  text-align: start

.project-descr
  padding: 30px 0 10px 0
  display: block
  font-size: 16px
  @media (min-width: $desktop-width)
    margin-left: 20px
    margin-right: auto
    padding-top: 0
    line-height: 39px

.projects-image
  @media (min-width: $desktop-width)
    width: 500px
  @media (min-width: $widescreen-width)
    width: 600px

.content-wrapper
  @media (min-width: $desktop-width)
    display: flex
    flex-direction: row
    justify-content: space-between

.tip
  font-size: 16px
  text-align: center
  margin-top: 0
</style>
