<template>
  <section class="contacts bg-secondary">
    <h2>My Contacts</h2>
    <div class="container footer-wrapper">
      <div class="icon-wrapper telegram">
        <svg
          width="43"
          height="43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 0a21.5 21.5 0 100 43 21.5 21.5 0 000-43z"
            fill="#fff"
          />
          <path
            d="M31.96 12.37l-3.84 19.36s-.54 1.34-2.01.7l-8.86-6.8-3.23-1.55-5.42-1.83s-.83-.3-.91-.94c-.08-.64.94-1 .94-1l21.56-8.45s1.77-.78 1.77.5"
            fill="#000"
          />
          <path
            d="M16.56 31.51s-.25-.02-.58-1.04l-1.96-6.4 13.03-8.27s.75-.45.72 0c0 0 .14.09-.27.46-.4.38-10.23 9.21-10.23 9.21"
            fill="#fff"
          />
          <path d="M20.64 28.24l-3.5 3.2s-.28.2-.58.07l.68-5.93" fill="#000" />
        </svg>
        <a
          href="https://t.me/AlexBlack24"
          class="contact-link"
          target="_blank"
          rel="noopener"
          >@AlexBlack24</a
        >
      </div>
      <div class="icon-wrapper twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          width="60"
          height="60"
          baseProfile="full"
          viewBox="0 0 76 76"
        >
          <path
            d="M17.417 30.083h9.5v28.5h-9.5v-28.5Zm14.25 0h9.5v3.474c3.017-1.805 6.592-3.474 9.5-3.474 6.333 0 7.916 6.334 7.916 6.334v22.166h-9.5v-19c-1.227-3.682-4.358-3.558-7.916-.365v19.365h-9.5v-28.5Zm-9.5-12.666a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Z"
            fill="#fff"
          />
        </svg>
        <a
          href="https://www.linkedin.com/in/alexander-chumaslov-9563b41b2/"
          class="twitter-link"
          target="_blank"
          rel="noopener"
          >My LinkedIn Profile</a
        >
      </div>
      <div class="icon-wrapper email">
        <svg
          class="svg-icon"
          width="45"
          height="44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.73.68C9.3.68.26 9.75.26 22.06.26 34.52 9.2 43.6 22.54 43.6c3.48 0 7.52-.75 10.39-2.21l-1.27-3.76a20.76 20.76 0 01-9.12 2.07c-10.8 0-17.95-7.24-17.95-17.63 0-10.24 7.24-17.53 18.14-17.53 10.72 0 18.05 6.77 18.05 16.83 0 5.54-1.41 8.5-3.95 8.5-1.32 0-2.44-.8-2.44-3.2V10.7h-5.22v3.05c-1.83-2.2-4.56-3.33-7.85-3.33-6.49 0-11.28 4.93-11.28 11.89 0 7.05 4.8 11.98 11.28 11.98 3.76 0 6.63-1.4 8.46-4.09.8 2.68 2.96 4.1 5.97 4.1 5.64 0 9.02-4.9 9.02-13.03C44.77 9.28 35.7.68 22.73.68zm-.42 29.04c-4.1 0-6.96-2.86-6.96-7.42 0-4.52 2.87-7.34 6.96-7.34 3.95 0 6.95 2.68 6.95 7.34 0 4.7-3 7.42-6.95 7.42z"
            fill="#fff"
          />
        </svg>
        <span class="contact-link mail"
          ><a
            href="mailto:alexanderchumaslov@gmail.com"
            class="mail-link"
            target="_blank"
            rel="noopener"
            >alexanderchumaslov@gmail.com</a
          ></span
        >
      </div>
    </div>
    <div class="copyright">Beardfolio 2024</div>
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

.mail-link
  color: #fff
  text-decoration: none
  &:hover
    opacity: 0.7

.email
  @media (min-width: $desktop-width)
    display: flex
    justify-content: space-around
    width: 100%
    text-align: center
    padding: 0 210px
  @media (min-width: $widescreen-width)
    padding: 0 420px
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
  @media (min-width: $widescreen-width)
    margin: 0 290px
  &:hover
    opacity: 0.7
</style>
