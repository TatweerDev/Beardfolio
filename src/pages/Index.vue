<template>
  <q-page class=" bg-primary text-white">
    <div class="info-wrapper container">
      <q-img src="../img/photo1.png" class="custom-image" />
      <div class="relative">
        <span class="descr">
          Меня зовут Александр, и я <span class="text-red">Фронтенд разработчик.</span> Я работаю с <span class="text-red">Vue.js</span> и <span class="text-red">Quasar</span>, а также другими JavaScript фреймворками. У меня есть опыт коммерческой разработки web приложений - это SPA, PWA, Android и iOS приложения... Я говорю на русском, английском и арабском языках. Добро пожаловать в мое портфолио =)
        </span>
        <router-link class="text-red absolute-bottom-right link-more" to="/about">
          Подробнее...
        </router-link>
      </div>
    </div>
    
    <section class="projects container">
      <h2>Мои проекты</h2>
      <ul class="projects-list-short">
        <li v-for="(el,index) in projects" :key="index">
          <a :href="el.link" class="text-red project-link" target="_blank" rel="noopener">
            <q-img :src="el.img" :ratio="2/1" />
            <span class="project-descr"><span class="text-red">{{ el.title }}</span>{{ el.descr }}</span>
          </a>
        </li>
      </ul>
      <router-link class="text-red link-projects" to="/projects">
        Посмотреть все мои работы...
      </router-link>
    </section>
    <page-contacts />
  </q-page>
</template>

<script>
import PageContacts from 'src/components/PageContacts.vue'

export default {
  components: { PageContacts },
  // name: 'PageIndex',
  data() {
    return {
      projects: [
        {
          title: 'Kavkaz.top',
          descr: 'Информацонно - новостной портал',
          link: 'https://kavkaz.top/',
          img: '../img/kavkaz.png'
        },
        {
          title: 'Tatweer.dev',
          descr: 'Сайт студии веб разработки',
          link: 'https://barbium.com/',
          img: '../img/tat.jpg'
        },
        {
          title: 'Photograf',
          descr: 'Сайт и мобильное приложение для любителей фотографи',
          link: 'https://photograf.itdak.pro/#/',
          img: '../img/photograf.png'
        },
        {
          title: 'ЭИОС',
          descr: 'Информационная среда для школьников и учителей',
          link: 'https://eios.netlify.app/',
          img: '../img/eios.png'
        },
        {
          title: 'Shakur textile',
          descr: 'Онлайн - магазин женской одежды',
          link: 'https://shakur-textile.com/',
          img: '../img/shakur.jpg'
        },
        {
          title: 'Vatanci',
          descr: 'Информацонно - новостной портал',
          link: 'https://mthvatan.com/',
          img: '../img/vatan.png'
        },
      ]
    }
  }
}
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


