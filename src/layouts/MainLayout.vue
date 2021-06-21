<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-9 text-positive" >

        <q-toolbar-title>
          <router-link to="/" class="link text-grey-3 text-montserrat text-weight-medium">
            Beardfolio
          </router-link>
          
        </q-toolbar-title>

        <nav>
          <ul class="tablet-screen text-montserrat text-positive">
            <li>About me</li>
            <li>My projects</li>
            <li>Contacts</li>
          </ul>
        </nav>

        <div>Ru</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered>
      <q-tabs class="bg-grey-9 mobile-screen" active-color="positive">
        <q-route-tab
          name="about"
          icon="person"
          label="Обо мне"
          to="/about" />
        <q-route-tab
          name="alarms"
          icon="perm_media"
          label="Все проекты"
          to="/projects" />
        <q-tab
          name="contacts"
          icon="import_contacts"
          label="Мои контакты" />
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
.menu-item
  color: #fff !important
</style>
