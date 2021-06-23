import { createStore } from 'vuex';

const store = createStore({
  state() {
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
  },
  getters: {
    projectsShort(state) {
      return state.projects
    }
  }
})

export default store;