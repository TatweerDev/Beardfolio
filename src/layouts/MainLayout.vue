<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-9 text-positive">

        <div class="container header-wrapper">
          <q-toolbar-title>
            <router-link to="/" class="link text-grey-3 text-montserrat text-weight-medium">
              Beardfolio
            </router-link>
          </q-toolbar-title>
          <q-tabs class="tablet-screen tabs" >
            <q-route-tab name="images" label="Главная" to="/" />
            <q-route-tab name="videos" label="Обо мне" to="/about"/>
            <q-route-tab name="articles" label="Проекты" to="/projects" />
          </q-tabs>
          <div>Ru</div>
        </div>
        
      </q-toolbar>
    </q-header>

    <q-img src="../img/banner.jpg" class="image-banner">
      <div class="absolute-center text-subtitle1 titles bg-transparent">
        <span class="text-h4 text-bold text-center "> Привет!</span>
        <span class="block text-h6 bg-black">Добро пожаловать в мое портфолио</span>
      </div>
    </q-img>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered>
      <q-tabs class="bg-grey-9 mobile-screen" active-color="positive">
        <q-route-tab
          name="main"
          icon="home"
          label="Главная"
          to="/" />
        <q-route-tab
          name="about"
          icon="person"
          label="Обо мне"
          to="/about" />
        <q-route-tab
          name="alarms"
          icon="perm_media"
          label="Проекты"
          to="/projects" />
        
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
.link
  text-decoration: none
  font-size: 30px
  @media (min-width: $tablet-width)
    font-size: 40px

.menu-item
  color: #fff !important

.titles 
  width: 330px
  display: flex
  flex-direction: column
  text-align: center
  background-color: transparent

.q-page-container
  padding-top: 0 !important

.header-wrapper
  width: 100%
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  

.image-banner
  @media (min-width: $tablet-width)
    height: 400px

.tabs
  @media (min-width: $tablet-width)
    padding-top: 10px


</style>
