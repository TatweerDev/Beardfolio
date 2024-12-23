<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="sass">
body
  font-family: 'Montserrat', Arial, Helvetica, sans-serif
  background-color: #1B1A17

ul
  list-style: none
  padding-left: 0

.container
  max-width: 599px

  @media (min-width: $tablet-width)
    max-width: 768px
    margin: 0 auto
  @media (min-width: $tablet-width)
    max-width: 1024px
  @media (min-width: $widescreen-width)
    max-width: 1440px
</style>
