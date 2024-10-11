const API__LINK = "https://jsonplaceholder.typicode.com/posts"
const wrapper = document.querySelector(".wrapper")
async function getData(api) {
    const respons = await fetch(api)
    respons
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
getData(API__LINK)

function createCard(data) {
    data.forEach(post => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        wrapper.appendChild(div)
    });
}

