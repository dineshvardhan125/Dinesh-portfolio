

let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tab){
  for(tablink of tablinks){
    tablink.classList.remove('active-link')
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tab).classList.add('active-tab')
}