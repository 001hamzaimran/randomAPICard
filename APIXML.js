const h1 = document.querySelectorAll("#title");
const image = document.getElementById("main");
const requestURL = `https://randomuser.me/api/`;
console.log(h1);
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);
xhr.onreadystatechange =  function () {
    if ( xhr.readyState === 4) {
        const response =  JSON.parse(this.responseText);
        // Name
        const    Naame = response.results[0].name;
        h1.forEach((elem) => {
            const fullName = `${Naame.title} ${Naame.first} ${Naame.last}`;
            elem.innerText = fullName;
        })

        // Image
        const img = response.results[0].picture.large;
        image.setAttribute("src", `${img}`);
        image.setAttribute("alt", `${Naame}`);
    }
}
xhr.send()


