const Menu = () => {
  document
    .querySelector("[data-behaviour='Menu']")
    .addEventListener('click', () => {
      document.getElementById('header').classList.toggle('navigation-open')
      document.getElementsByTagName( 'html' )[0].classList.toggle('overflow-y-hidden')
    })
}

export default Menu
