const users = JSON.parse(localStorage.getItem("users"))
const nav = document.querySelector(".nav")
const tabContent = document.querySelector(".tab-content")

let marks = []
let computers = []

for (let user of users) {
    for (let comp of user.computers) {
        computers.push(comp)
        if (!marks.includes(comp.mark)) {
            marks.push(comp.mark)
        }
    }
}

for (let mark of marks) {
    nav.innerHTML += ` <button class="nav-link active" id="v-pills-home-tab" 
    data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab"
     aria-controls="v-pills-home" aria-selected="true">Home</button>`

    tabContent.innerHTML += `
    <div class="tab-pane fade" id="${mark}tab" role="tabpanel" 
          aria-labelledby="${mark} tabindex="0"></div>`
}

const tabPanes = document.querySelectorAll(".tab-pane")
for (let pane of tabPanes) {

    for (let comp of computers) {

        if (pane.id == `v-pills-${comp.mark})` {
            pane.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${comp.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">INFO</h5>
              <p class="card-text">Mark:${comp.mark}</p>
              <p class="card-text">price:${comp.price}</p>
              <p class="card-text">Ram:${comp.ram}</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>       `
        }
    }
}