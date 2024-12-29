let div = document.getElementById("root")
const construct = (data) => {
    data.forEach((e) => {
        let CardWrapper=document.createElement("div")
        CardWrapper.setAttribute('class',"card-wrapper")
        CardWrapper.innerHTML = `<img src="${e.flags.svg}" alt="flag" class="card-image">  
            <div class="card-content">
                <h3>${e.name.common}</h3>
                <h4>${e.capital?e.capital[0] : "-"}</h4>
            </div>`
        div.appendChild(CardWrapper)
    });
}
fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => construct(data))
    .catch((err) => console.error(err))