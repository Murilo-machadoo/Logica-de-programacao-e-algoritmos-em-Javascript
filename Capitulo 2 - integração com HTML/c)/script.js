const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault()


    resp.textContent = `${form.inProduto.value} - Promoção: Leve 3 por ${form.inPreco.value * 2.5}\n
    o terceiro produto custa apenas R$: ${form.inPreco.value / 2}`
})