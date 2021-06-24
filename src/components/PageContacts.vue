<template>
  <section class="contacts bg-secondary">
    <h2>Мои контакты</h2>
    <div class="container footer-wrapper">
      <div class="icon-wrapper telegram">
        <svg width="43" height="43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 0a21.5 21.5 0 100 43 21.5 21.5 0 000-43z" fill="#fff"/>
          <path d="M31.96 12.37l-3.84 19.36s-.54 1.34-2.01.7l-8.86-6.8-3.23-1.55-5.42-1.83s-.83-.3-.91-.94c-.08-.64.94-1 .94-1l21.56-8.45s1.77-.78 1.77.5" fill="#000"/>
          <path d="M16.56 31.51s-.25-.02-.58-1.04l-1.96-6.4 13.03-8.27s.75-.45.72 0c0 0 .14.09-.27.46-.4.38-10.23 9.21-10.23 9.21" fill="#fff"/>
          <path d="M20.64 28.24l-3.5 3.2s-.28.2-.58.07l.68-5.93" fill="#000"/>
        </svg>
        <a href="https://t.me/FrontendNinja84" class="contact-link"  target="_blank" rel="noopener">@FrontendNinja84</a>
      </div>
      <div class="icon-wrapper twitter">
        <svg width="69" height="69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51.4 22.23a8.68 8.68 0 003.94-4.99 21.3 21.3 0 01-5.77 2.12 8.56 8.56 0 00-6.52-2.8c-2.56 0-4.72.9-6.49 2.64a8.73 8.73 0 00-2.35 8.4c-7.54-.25-13.79-3.38-18.71-9.4a9.07 9.07 0 00-1.25 4.52c0 3.2 1.34 5.72 4.03 7.58a10.03 10.03 0 01-4.03-1.16 9 9 0 007.2 9.03c-.77.2-1.57.29-2.4.29a4.5 4.5 0 01-1.63-.2 8.96 8.96 0 008.45 6.34c-3.27 2.56-7.01 3.83-11.24 3.83-1.03 0-1.77-.02-2.21-.1a25 25 0 0013.92 4.05c5.25 0 9.89-1.33 13.92-3.99a24.96 24.96 0 008.93-9.75 26.42 26.42 0 002.88-12v-1.15a19.1 19.1 0 004.51-4.71c-1.65.72-3.4 1.2-5.18 1.45z" fill="#fff"/>
        </svg>
        <a href="https://twitter.com/tatweerd" class="twitter-link"  target="_blank" rel="noopener">@TatweerD</a>
      </div>
      <div class="icon-wrapper email">
        <svg class="svg-icon" width="45" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.73.68C9.3.68.26 9.75.26 22.06.26 34.52 9.2 43.6 22.54 43.6c3.48 0 7.52-.75 10.39-2.21l-1.27-3.76a20.76 20.76 0 01-9.12 2.07c-10.8 0-17.95-7.24-17.95-17.63 0-10.24 7.24-17.53 18.14-17.53 10.72 0 18.05 6.77 18.05 16.83 0 5.54-1.41 8.5-3.95 8.5-1.32 0-2.44-.8-2.44-3.2V10.7h-5.22v3.05c-1.83-2.2-4.56-3.33-7.85-3.33-6.49 0-11.28 4.93-11.28 11.89 0 7.05 4.8 11.98 11.28 11.98 3.76 0 6.63-1.4 8.46-4.09.8 2.68 2.96 4.1 5.97 4.1 5.64 0 9.02-4.9 9.02-13.03C44.77 9.28 35.7.68 22.73.68zm-.42 29.04c-4.1 0-6.96-2.86-6.96-7.42 0-4.52 2.87-7.34 6.96-7.34 3.95 0 6.95 2.68 6.95 7.34 0 4.7-3 7.42-6.95 7.42z" fill="#fff"/>
        </svg>
        <span class="contact-link mail">tatweer.development2020@gmail.com</span>
      </div>
    </div>
    <div class="copyright">Beardfolio 2021</div>
  </section>
</template>

<style lang="sass" scoped>

.contacts
  margin-top: 40px
  margin-bottom: 0
  padding-bottom: 20px

.contact-link,
.twitter-link
  display: block
  text-decoration: none
  color: #fff
  font-size: 25px
  padding: 0 0 0 25px

.twitter-link
  padding: 15px 0 0 12px

.icon-wrapper
  display: flex
  flex-wrap: wrap
  margin: 20px
  

.twitter
  margin-left: 8px
  &:hover
    opacity: 0.7

.mail
  position: relative
  z-index: 0
  padding-top: 10px
  font-size: 12px
  background-color: transparent
  @media (min-width: $tablet-width)
    font-size: 25px
  @media (min-width: $desktop-width)
    padding-top: 3px
  
.email
  @media (min-width: $desktop-width)
    display: flex
    justify-content: space-around
    width: 100%
    text-align: center
    padding: 0 210px

.svg-icon
  display: block

.copyright
  color: #fff
  display: block
  text-align: center

.contacts h2
  color: #fff
  font-size: 40px
  font-weight: bold
  text-align: center
  padding-top: 30px
  margin: 10px 0 40px 0

.footer-wrapper
  @media (min-width: $desktop-width)
    width: 100%
    display: flex
    flex-direction: row
    flex-wrap: wrap
    align-items: center
  
.telegram
  @media (min-width: $desktop-width)
    margin-left: 130px
    margin-right: 180px
  &:hover
    opacity: 0.7
</style>