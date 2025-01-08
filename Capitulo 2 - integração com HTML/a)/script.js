const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const medicamento = form.inMed.value
    const preco = Number(form.inPreco.value)

   resp.textContent = `Promoção de ${medicamento} 
   Leve 2 por R$:${preco.toFixed(0)}`
    
})