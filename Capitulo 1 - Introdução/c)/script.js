const ValorProduto = Number(prompt("Valor do produto"));
const desconto = ValorProduto - (ValorProduto * 0.10);
const parcelas = ValorProduto / 3;
alert(`Metodos de pagamento: Valor a vista com 10% de desconto: ${desconto}.
    3 parcelas de ${parcelas.toFixed(2)}`)