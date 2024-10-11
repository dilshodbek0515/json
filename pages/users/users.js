const API__LINK = "https://jsonplaceholder.typicode.com/users"
const wrapper = document.querySelector(".users_wrapper")
async function getData(api) {
    const respons = await fetch(api)
    respons
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
getData(API__LINK)

function createCard(data) {
    data.forEach(users => {
        let div = document.createElement("div")
        div.className = "user_card"
        div.innerHTML = `
        <h3>${users.id}</h3>
        <p>${users.name}</p>
        <p>${users.username}</p>
        <p>${users.email}</p>
        <p>${users.address.street}</p>
        <p>${users.address.suite}</p>
        <p>${users.address.city}</p>
        <p>${users.address.zipcode}</p>
        <p>${users.address.geo.lat}</p>
        <p>${users.address.geo.lng}</p>
        <p>${users.phone}</p>
        <p>${users.website}</p>
        <p>${users.company.name}</p>
        <p>${users.company.catchPhrase}</p>
        <p>${users.company.bs}</p>
        `
        wrapper.appendChild(div)
    });
}

