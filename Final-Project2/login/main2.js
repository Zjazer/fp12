const users = [
    {
        name: "u1",
        password: "p1",
        phone: "000-000-0000",
        computers: [
            {
                id:1,
                mark: 'asus',
                url: '../mainboard/imgs/alienware-removebg-preview.png',
                price:1000
            }, {
                id:2      ,
                mark: 'asus',
                url: '../mainboard/imgs/alienware-removebg-preview.png',
                price:1000
            }, {
                id:3,
                mark: 'asus',
                url: '../mainboard/imgs/alienware-removebg-preview.png',
                price:1000
            }
        ]
    }
]

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('#logBtn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let usersv = JSON.parse(localStorage.getItem('users'))
    
let userAvaiable = usersv.some(user => user.name == allInputs[0].value && user.password == allInputs[1].value)

if(userAvaiable){
    localStorage.setItem('currentUser',allInputs[0].value)
    location.href = '../mainBoard/index.html'
}  else{
    alert('invalid userName')
}
})
