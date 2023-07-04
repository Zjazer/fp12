const tbody = document.querySelector("tbody")
const users = JSON.parse(localStorage.getItem('users'))
let currentUser = localStorage.getItem('currentUser')
const allInputs = document.querySelectorAll("input")
const allSelect= document.querySelector("select")

let change = false
let computers = []
function updateTable() {

  for (let user of users) {
    if (user.name == currentUser) {
      computers = user.computers
    }
  }

  console.log(currentUser);

  tbody.innerHTML = ''

  computers.forEach((comp) => {
    tbody.innerHTML += `<tr>
                           <td>${comp.id}</td> 
                           <td>${comp.mark}</td>      
                           <td>
                           <img class="img" src = "${comp.url}" alt ="" >   
                           </td> 
                           <td>
                           ${comp.price}
                           </td>
                           <td>
                               <button  id = "${comp.id}d" class = "btn btn-danger">Delete</button>
                               <button  data-bs-toggle="modal" data-bs-target="#exampleModal"  id = "${comp.id}c   b" class = "btn btn-primary">Change</button>
                           </td>   
                        </tr>`

  });
  for (let inp of allInputs) {
    inp.value = ''
  }

  change = false
}

updateTable()

const saveBtn = document.querySelector("#save")
const table = document.querySelector("table")




function createComputer(id) {
  if (!change) {
    let newComputer = {
      id: computers.at(-1).id + 1,
      category: allInputs[1].value,
      mark: allInputs[2].value,
      price: allInputs[3].value,
      description: allInputs[4].value,
      used:[...allSelect[1]].find(opt => opt.selected).value ,

      url: allInputs[5].value,

      ram: allInputs[6].value,
      cpu: allInputs[7].value,
      os: allInputs[9].value,
      rom: allInputs[8].value,
      romType:[...allSelect[2]].find(opt => opt.selected).value ,
      gpu: allInputs[10].value,
    }

    computers.push(newComputer)
    for (let user of users) {
      if (user.name === currentUser) {
        user.computers = computers
      }
    }
    localStorage.setItem("users", JSON.stringify(users))
    updateTable()
  } else {

  }


}

function changeComputer(id) {
  change = true
  let computer = computers.find(comp => comp.id == id)
  allInputs[1].value = computer.category
  allInputs[2].value = computer.mark 
  allInputs[3].value =  computer.price 
  allInputs[4].value = computer.description 
  allSelect[1].value 
  allInputs[5].value = computer.url
  allInputs[6].value = computer.ram 
  computer.ram;
  allInputs[7].value = computer.cpu;
  allInputs[9].value = computer.os;
  allInputs[8].value = computer.rom;
  allInputs[10].value = computer.gpu


}


function deleteComputers(id) {
  computers = computers.filter(comp => comp.id != id)

  for (let user of users) {
    if (user.name === currentUser) {
      user.computers = computers
    }
  }

  localStorage.setItem("users", JSON.stringify(users))
}
let id
function handleClick(e) {
  if (e.target.innerHTML == 'Delete')
    deleteComputers(parseInt(e.target.id))
    if(e.target.innerHTML == 'Change'){
      changeComputer(parseInt(e.target.id))
    }
  id = parseInt(e.target.id)
}

saveBtn.addEventListener("click", () => createComputer(id))
table.addEventListener("click", handleClick)