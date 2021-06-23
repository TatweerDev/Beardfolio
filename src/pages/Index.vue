<template>
  <q-page class=" bg-primary text-white">
    <q-img src="../img/banner.jpg">
      <div class="absolute-center text-subtitle1 titles">
        <span class="text-h2 text-bold text-center"> Привет!</span>
        <span class="block text-h6">Меня зовут Александр</span>
      </div>
    </q-img>
    <q-img src="../img/photo1.png" class="custom-image" />
    <div class="relative">
      <span class="descr">
        И я <span class="text-red">Фронтенд разработчик (Мидл).</span> Я работаю с <span class="text-red">Vue.js</span> и <span class="text-red">Quasar</span>, а также другими JavaScript фреймворками. У меня есть опыт коммерческой разработки приложений - это SPA, PWA, Android и iOS приложения... Я говорю на русском, английском и арабском языках. Добро пожаловать в мое портфолио =)
      </span>
      <router-link class="text-red absolute-bottom-right link-more" to="/about">
        Подробнее...
      </router-link>
    </div>
    <section class="projects">
      <h2>Мои проекты</h2>
      <ul>
        <li v-for="(el,index) in projects" :key="index">
          <a :href="el.link" class="text-red project-link" target="_blank" rel="noopener">
            <q-img :src="el.img" :ratio="2/1" class="image"/>
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
          title: 'ЭИОС',
          descr: 'Информационная среда для школьников и учителей',
          link: 'https://eios.netlify.app/',
          img: '../img/eios.png'
        },
        {
          title: 'Photograf',
          descr: 'Сайт и мобильное приложение для любителей фотографи',
          link: 'https://photograf.barbium.com/#/',
          img: '../img/photograf.png'
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
.titles 
  width: 330px
  display: flex
  flex-direction: column
  text-align: center
  background-color: rgba(0, 0, 0, 0.8)


// .custom-image
.descr
  display: inline-block
  margin-top: 10px
  padding: 15px
  font-size: 18px

.projects
  margin: 40px 0 20px 0


.projects h2
  font-size: 40px
  font-weight: bold
  text-align: center
  margin: 10px 0 40px 0

.relative
  position: relative
  padding-bottom: 30px

.link-more
  font-size: 18px
  right: 15px !important

.link-projects
  width: 100%
  display: block
  margin: 40px 0
  text-align: center

.project-descr
  display: flex
  flex-direction: column
  margin: 20px 0
  font-size: 16px
  text-align: center
  padding: 0 10px
  color: #fff

.project-link
  text-decoration: none

</style>


