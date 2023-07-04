const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('#regBtn')
const alertDiv = document.querySelector('.alert')

const users = JSON.parse(localStorage.getItem('users'))


btn.addEventListener('click', (e) => {
    if (allInputs[1].checkValidity()) {
        e.preventDefault()
        let newUser = {
            name: allInputs[0].value,
            password: allInputs[1].value,
            phone: allInputs[2].value,
          
            computers:[]
        }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        alertDiv.style.display = 'block'
        setTimeout(() =>{
            alertDiv.style.display = 'none'
        },2000)
     
    }else{
        alert('phone number is wrong')
    }
})