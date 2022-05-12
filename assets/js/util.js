function scrollToTop(){
	window.scrollTo({top: 0, behavior: 'smooth'})
}

const mobileMenuRef = document.getElementById('mobile-menu')
const menuBtnRef = document.getElementById('menu-btn')
const bodyRef = document.body

window.addEventListener('resize', (e)=>{
  const state = mobileMenuRef.style.visibility
  if(state === 'hidden') return
  if(window.innerWidth <= 768) return
  toggleMenu()
});

//PREPARE TEXT ROLL NODES FOR HOVER ANIMATION
const textRollButtons = document.querySelectorAll('.text-roll') 
textRollButtons.forEach(ele=>{
  const text = ele.textContent || innerText
  ele.setAttribute('data-text', text)
  ele.innerHTML = `<span>${text}</span>`
})

//MOBILE MENU ANIMATION
async function toggleMenu(){
  const state = mobileMenuRef.style.visibility
  mobileMenuRef.style.transitionDuration = '0.32s'
  if(state === 'hidden'){
    menuBtnRef.style.transform = 'scaleY(-1)'
    document.body.style.overflow = 'hidden'
    mobileMenuRef.style.visibility = 'visible'
    mobileMenuRef.style.transform = 'translateX(0%)'
  } else{
    menuBtnRef.style.transform = 'scaleY(1)'
    document.body.style.overflow = 'auto'
    mobileMenuRef.style.transform = 'translateX(100%)'
    mobileMenuRef.style.visibility = 'hidden'
  }
  mobileMenuRef.style.transitionDuration = 'none'
}