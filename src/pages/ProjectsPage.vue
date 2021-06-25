<template>
  <section class="text-white">
    <div class="container">
      <h2>Оцените некоторые мои работы</h2>
      <ul class="projects-list">
        <li v-for="(item, index) in info" :key="index" >
          <h3>{{ item.header }}</h3>
          <div class="content-wrapper">
            <a :href="item.link"><q-img :src="item.imageSrc" class="projects-image" /></a>
            <span class="project-descr" v-html="item.descr" />
          </div>
        </li>
      </ul>
    </div>
    <page-contacts />
  </section>
</template>

<script>
import PageContacts from 'src/components/PageContacts.vue'

export default {
  components: { PageContacts },
  data() {
    return {
      info: [
        {
          link: 'https://kavkaz.top/',
          header: 'Kavkaz.top - информацонно - новостной портал',
          imageSrc: '../img/kavkaz.png',
          descr: 'Многоязычный (Ru, Eng, Tr) информационный портал. <span class="text-red">SPA,</span> сделаный на <span class="text-red">Vue.js.</span>В работе я использовал <span class="text-red">Vuex, Router, Rest Api.</span> Бекенд сайта сделан на Django.'
        },
        {
          link: 'https://barbium.com/',
          header: 'Tatweer development studio',
          imageSrc: '../img/tat.jpg',
          descr: '<span class="text-red">SPA - </span>cайт студия для веб разработчиков. Сделан на <span class="text-red">Vue.js.</span> На сайте есть авторизация, возможность обмена сообщениями. Также использован стек - <span class="text-red">Vuex, Router, Rest Api</span>'
        },
        {
          link: 'https://photograf.itdak.pro/#/',
          header: 'Photograf',
          imageSrc: '../img/photograf.png',
          descr: '<span class="text-red">PWA - </span> сайт и мобильное приложение для любителей фотографии. Сделан на <span class="text-red">Quasar + Vue.js.</span>. Приложение имеет десктопную версию для Windows, Linux и Mac, а также мобильное приложение для Andriod и iOS. К сайту подключен <span class="text-red"> Service worker</span>'
        },
        {
          link: 'https://eios.netlify.app/',
          header: 'ЭИОС - электронная информаионно - образовательная среда',
          imageSrc: '../img/eios.png',
          descr: 'Небольшой <span class="text-red">SPA - </span> сайт, прототип для хранения информации об учебном процессе для школьников и преподавателей. Сделан на <span class="text-red">Vue.js.</span>. Только десктопная версия (т.е. сайт не адаптивный)'
        },
        {
          link: 'https://mthvatan.com/',
          header: 'MTH - Vatanci',
          imageSrc: '../img/vatan.png',
          descr: 'Информационно новостной портал. Сделан на CMS WordPress'
        },
        {
          link: 'https://shakur-textile.com/',
          header: 'Shakur-textile',
          imageSrc: '../img/shakur.jpg',
          descr: 'Онлайн магазин женской мусульманской одежды. Сделан на WordPress. Подключена система платежей Swift'
        },
        {
          link: 'https://pink-desktop.netlify.app',
          header: 'Pink - сайт для мобильного приложения',
          imageSrc: '../img/pink.jpg',
          descr: 'Сайт для одноименного мобильного приложения, для любителей фотографии. Сделан на <span class="text-red">HTML, CSS </span> '
        },
        {
          link: 'https://pink-desktop.netlify.app',
          header: 'Kekstagram',
          imageSrc: '../img/kekstagram.jpg',
          descr: 'Сайт для загрузки фотогафий. Есть опция наложения масок на фото перед загрузкой. Сделан на <span class="text-red">HTML, CSS и JS</span> '
        },
        {
          link: 'https://tasks-manager-app.netlify.app',
          header: 'Taskmanager',
          imageSrc: '../img/taskmanager.png',
          descr: 'Простое SPA - ToDo приложение. Сделано на нативном <span class="text-red">JS</span> '
        },
        {
          link: 'https://spares-shop.netlify.app/home.html',
          header: 'Spares shop',
          imageSrc: '../img/Spares.jpg',
          descr: 'Магазин автозапчастей. Сделано на <span class="text-red">HTML, CSS и JS</span> с любовью... Также я испозовал в проекте <span class="text-red">JQuerry</span> '
        },
        {
          link: 'https://kvast.netlify.app',
          header: 'Kvast',
          imageSrc: '../img/Kvast.jpg',
          descr: 'Простенький одностраничный лендинг для фирмы продающей квас. Только десктоп'
        },
      ] 
    }
  }
}
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
</style>