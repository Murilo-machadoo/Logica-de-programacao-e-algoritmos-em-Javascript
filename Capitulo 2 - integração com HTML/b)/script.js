const form = document.querySelector("form");
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor15 = Number(form.inPreco.value)
    const tempoMin = Number(form.inUso.value)
    const blocos = Math.ceil(tempoMin / 15);
    const total = blocos * valor15
    resp.textContent = `total: R$${total}`

})