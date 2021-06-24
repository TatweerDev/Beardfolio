<template>
  <div>
    <section class="info-main container">
      <h2>Обо мне</h2>
      <div class="about-wrapper">
        <q-img class="about-photo" src="../img/my-photo.jpg" />
        <div class="text-white info-text">
          <div>
            <span>Имя: Александр</span>
            <span>Фамилия: Чумаслов</span>
            <span>Возраст: 36</span>
            <span>Гражданство: РФ</span>
            <span>Языки: Русский, Английский, Арабский</span>
          </div>
          <div>
            <span>Семейное положение: женат</span>
            <span>Место работы: фриланс</span>
            <span>Текущий адрес: Турция, Стамбул</span>
            <span>Номер телефона:  +905376250895</span>
            <span>GitHub: <a href="https://github.com/TatweerDev" target="_blank" rel="noopener" class="text-white info-link"> https://github.com/TatweerDev </a></span>
          </div>
        </div>
      </div>
      
      <q-btn outline rounded color="red" label="Скачать CV" class="text-white cv-button"/>
    </section>
    <section class="skills-main container">
      <h2>Мои навыки</h2>
      <div class="text-wrapper">
        <span class="skills-text">Для работы я использую <span class="text-red">HTML, CSS и JavaScript.</span> Пишу код как на нативном  <span class="text-red">JavaScript(ES7)</span>, так и на фреймворках - в основном на <span class="text-red">Vue.js(Vue2, Vue3)</span>, а так же <span class="text-red">Quasar</span> и <span class="text-red">JQuerry.</span> На <span class="text-green">Vue</span> есть опыт работы с <span class="text-green">REST API, Vuex, Router, Service Worker</span> и другими библиотеками. Также разрабатывал универсальные веб и мобильные приложения - <span class="text-red">PWA</span>, используя  <span class="text-red">Quasar</span>. Само собой уверенно использую <span class="text-red">GIT, SASS, LESS, Webpack, Gulp, Node</span> и другие базовые технологии, необходимые сегодня для разработки. Есть опыт работы в команде. Также у меня был опыт работы с системами CMS, такими как WordPress. Работаю с шаблонами Photoshop, Zeplin, Figma и т.д. Я всегда двигаюсь вперед и изучаю новые технологии и навыки. Умею общаться с коллективом. Вот как то так...</span>
      </div>
      <ul class="progress">
        <li v-for="(el,index) in skills" :key="index" class="progress-item">
          <radial-progress-bar
            :diameter="220"
            :completed-steps="el.progress"
            :total-steps="totalSteps"
            startColor="#f44336"
            stopColor="#c71104"
            class="progress-bar">
            <p class="text-white progress-number">{{ el.progress }} %</p>
            <p class="text-white progress-stack" style="font-size: 20px; font-weight: bold;">{{ el.stack }}</p>
          </radial-progress-bar>
        </li>
      </ul>
    </section>
    <section class="certificates container">
      <h2>Мои сертификаты</h2>
      <div class="certificates-images">
        <a href="../img/1.2.jpg"><q-img class="certificate-item" src="../img/1.2.jpg" /></a>
        <a href="../img/2.1.jpg"><q-img class="certificate-item" src="../img/2.1.jpg" /></a>
        <a href="../img/2.2.jpg"><q-img class="certificate-item" src="../img/2.2.jpg" /></a>
      </div>
    </section>
    <page-contacts />
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
import PageContacts from 'src/components/PageContacts.vue'

export default {
  components: { RadialProgressBar, PageContacts },
  data() {
    return {
      skills: [
        {
          stack: 'HTML',
          progress: 95
        },
        {
          stack: 'CSS',
          progress: 95
        },
        {
          stack: 'JavaScript',
          progress: 80
        },
        {
          stack: 'Vue.js',
          progress: 85
        },
        {
          stack: 'Quasar',
          progress: 80
        },
        {
          stack: 'JQuerry',
          progress: 75
        }
      ],
      html: 95,
      totalSteps: 100
    }
  }
}
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

.info-text div span
  display: block
  font-size: 16px
  margin-bottom: 10px
  @media (min-width: $tablet-width)
    font-size: 17px
  @media (min-width: $desktop-width)
    margin-bottom: 20px

.info-link
  text-decoration: none
  &:hover
    text-decoration: underline

.text-wrapper
  margin-top: 20px
  padding: 15px

.skills-text
  font-size: 16px
  line-height: 30px
  color: #fff
  @media (min-width: $tablet-width)
    font-size: 18px
    line-height: 35px

.cv-button
  margin-top: 20px
  @media (min-width: $tablet-width)
    margin: 30px auto 0 25px
  @media (min-width: $desktop-width)
    margin: -65px 0px 0 350px
  &:hover
    color: #fff !important
    

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
  &:hover
    opacity: 0.7

.about-wrapper
  display: flex
  flex-direction: column
  @media (min-width: $desktop-width)
    flex-direction: row
    justify-content: space-between
  

.about-photo
  @media (min-width: $tablet-width)
    margin: 0 auto
    width: 400px
  @media (min-width: $desktop-width)
    width: 350px

// .progress-item

</style>