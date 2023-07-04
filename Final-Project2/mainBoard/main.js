const h1 = document.querySelector('h1')
const logOut = document.querySelector('#logout')
const logIn = document.querySelector('#login')
const myComp = document.querySelector('#table')
const buyComp = document.querySelector('#shop')

console.log(localStorage.getItem('currentUser'))

if(localStorage.getItem('currentUser')){
  h1.innerHTML += localStorage.getItem('currentUser')
  logOut.style.display = 'inline'
  myComp.style.display = 'inline'
  buyComp.style.display = 'inline'
  logIn.style.display = 'none'
}else{
  logOut.style.display = 'none'
  myComp.style.display = 'none'
  buyComp.style.display = 'inline'
  logIn.style.display = 'inline'
 
}

logOut.addEventListener('click',()=>{
  localStorage.setItem('currentUser','')
  h1.innerHTML = 'User: '
  logOut.style.display = 'none'
  myComp.style.display = 'none'
  buyComp.style.display = 'inline'
  logIn.style.display = 'inline'
})