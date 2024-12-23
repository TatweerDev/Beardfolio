<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-9 text-positive">
        <div class="container header-wrapper">
          <q-toolbar-title>
            <router-link
              to="/"
              class="link text-grey-3 text-montserrat text-weight-medium"
            >
              Beardfolio
            </router-link>
          </q-toolbar-title>
          <q-tabs class="tablet-screen tabs">
            <q-route-tab name="images" label="Main" to="/" />
            <q-route-tab name="videos" label="About me" to="/about" />
            <q-route-tab name="articles" label="Projects" to="/projects" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-img src="../img/banner.jpg" class="image-banner">
      <div class="absolute-center text-subtitle1 titles bg-transparent">
        <span class="text-h4 text-bold text-center hello"> Hi There!</span>
        <span class="block text-h6 bg-black welcome"
          >Welcome to my portfolio</span
        >
      </div>
    </q-img>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered>
      <q-tabs class="bg-grey-9 mobile-screen" active-color="positive">
        <q-route-tab name="main" icon="home" label="Main" to="/" />
        <q-route-tab name="about" icon="person" label="About me" to="/about" />
        <q-route-tab
          name="alarms"
          icon="perm_media"
          label="Projects"
          to="/projects"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<style lang="sass">
.link
  text-decoration: none
  font-size: 30px
  @media (min-width: $tablet-width)
    font-size: 40px
  &:hover
    color: #f44336 !important

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
  @media (min-width: $desktop-width)
    margin-top: 10px

.tabs a:hover
  opacity: 1

.hello
  @media (min-width: $desktop-width)
    font-size: 40px
    display: block
    margin-bottom: 10px
  @media (min-width: $widescreen-width)
    font-size: 45px
.welcome
  @media (min-width: $desktop-width)
    width: 500px
    padding: 10px
    margin-left: -100px
</style>
