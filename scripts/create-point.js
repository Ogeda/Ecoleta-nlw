function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://br-cidade-estado-nodejs.glitch.me/estados")
        .then(res => res.json())
        .then(states => {

            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populationUFs()



document
    .querySelector("select[name=uf")
    .addEventListener("change", () => {
        console.log("Mudei")
    })