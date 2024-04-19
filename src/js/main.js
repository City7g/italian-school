import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

// const rules = document.querySelector('.rules')
// const links = document.querySelectorAll('.header__menu-link')

// let some = false

// if (rules && links.length) {
//   links.forEach(link => {
//     link.addEventListener('click', e => {
//       e.preventDefault()
//       if (some) {
//         rules.classList.remove('active')
//       } else {
//         rules.classList.add('active')
//       }
//       some = !some
//     })
//   })
// }

const slider = document.querySelector('.slider__main')

if (slider) {
  const swiper = new Swiper(slider, {
    modules: [Navigation],
    navigation: {
      prevEl: '.slider__prev',
      nextEl: '.slider__next',
    },
  })
}

const burger = document.querySelector('.ui .burger')
if (burger) {
  burger.addEventListener('click', e => {
    e.preventDefault()

    burger.classList.toggle('active')
  })
}

const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header-mobile')

if (headerBurger && headerMenu) {
  headerBurger.addEventListener('click', e => {
    e.preventDefault()

    document.body.style.overflow = headerBurger.classList.contains('active')
      ? ''
      : 'hidden'

    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
  })
}

const tabs = document.querySelectorAll('.tabs__item')

if (tabs.length) {
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault()

      tabs.forEach(i => i.classList.remove('active'))
      tab.classList.add('active')
    })
  })
}

const timer = document.querySelector('.timer')

const formatTimerNumber = value => {
  return value < 10 ? `0${value}` : value
}

if (timer) {
  const getTimeUntilNextDay = () => {
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(now.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)

    const timeUntilNextDay = tomorrow - now

    const hours = Math.floor(timeUntilNextDay / (1000 * 60 * 60))
    const minutes = Math.floor(
      (timeUntilNextDay % (1000 * 60 * 60)) / (1000 * 60)
    )
    const seconds = Math.floor((timeUntilNextDay % (1000 * 60)) / 1000)

    return { hours, minutes, seconds }
  }

  const updateTimer = () => {
    const timer = getTimeUntilNextDay()

    const timerHour = document.querySelector('.timer__hour')
    const timerMinute = document.querySelector('.timer__minute')
    const timerSecond = document.querySelector('.timer__second')

    timerHour.textContent = formatTimerNumber(timer.hours)
    timerMinute.textContent = formatTimerNumber(timer.minutes)
    timerSecond.textContent = formatTimerNumber(timer.seconds)
  }

  setInterval(updateTimer, 1000)

  updateTimer()
}

const rulesAsideLinks = document.querySelectorAll('.rules__aside .rules__link')
const ruleItems = document.querySelectorAll('.rules__content .rules__item')

rulesAsideLinks.forEach((link, index) => {
  link.addEventListener('mouseenter', e => {
    e.preventDefault()

    ruleItems.forEach((item, idx) => {
      if (index === idx) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  })
})

const closeAllPopups = () => {
  document.querySelectorAll('.popup').forEach(p => {
    p.classList.remove('active')
  })
  document.querySelector('.header__menu').classList.remove('active')
}

const openPopup = id => {
  const popup = document.querySelector(`#${id}`)

  if (popup) {
    popup.classList.add('active')
  }
}

const hideBodyScroll = () => {
  document.body.style.overflow = 'hidden'
}

const showBodyScroll = () => {
  document.body.style.overflow = ''
}

const popups = document.querySelectorAll('[data-popup]')

popups.forEach(popup => {
  popup.addEventListener('click', e => {
    e.preventDefault()

    const needPopup = document.querySelector(
      `#${popup.getAttribute('data-popup')}`
    )

    if (needPopup) {
      hideBodyScroll()
      closeAllPopups()
      openPopup(popup.getAttribute('data-popup'))
    }
  })
})

document
  .querySelectorAll('.popup .popup__bg, .popup .popup__close')
  .forEach(popup => {
    popup.addEventListener('click', () => {
      showBodyScroll()
      closeAllPopups()
    })
  })

const cardCurator = document.querySelectorAll('.card-curator')
const cardFaq = document.querySelectorAll('.card-faq')

cardCurator.forEach(card => {
  card.querySelector('.card-curator__arrow').addEventListener('click', () => {
    card.classList.toggle('active')
  })
})

cardFaq.forEach(card => {
  card.querySelector('.card-faq__arrow').addEventListener('click', () => {
    card.classList.toggle('active')
  })
})

const packageForm = document.querySelector('.form-package')

if (packageForm) {
  packageForm.addEventListener('submit', e => {
    e.preventDefault()

    window.location.href = '/account/purchase'
  })
}
