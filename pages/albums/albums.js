const API__LINK = "https://jsonplaceholder.typicode.com/albums"
const album_wrapper = document.querySelector(".album_wrapper")
async function getData(api) {
    const respons = await fetch(api)
    respons
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}
getData(API__LINK)

function createCard(data) {
    data.forEach(albums => {
        let div = document.createElement("div")
        div.className = "album_card"
        div.innerHTML = `
        <h3>${albums.userId}</h3>
        <h4>${albums.id}</h4>
        <p>${albums.title}</p>
        `
        album_wrapper.appendChild(div)
    });
}

