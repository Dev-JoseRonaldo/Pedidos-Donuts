function updateOrder() {
    var precoDonuts = 10;
    var aliqTaxa = 0.06;

    var donutSimples = parseInt(document.getElementById("cakeDonuts").value);
    var donutCobertura = parseInt(document.getElementById("glazedDonuts").value);
    if (isNaN(donutSimples)) {
        donutSimples = 0;
    }
    if (isNaN(donutCobertura)) {
        donutCobertura = 0;
    }

    var subtotal = (donutSimples + donutCobertura) * precoDonuts;
    var taxa = subtotal * aliqTaxa;
    var total = subtotal + taxa;

    document.getElementById("subtotal").value = "R$" + subtotal.toFixed(2);
    document.getElementById("taxa").value = "R$" + taxa.toFixed(2);
    document.getElementById("total").value = "R$" + total.toFixed(2);
}

function PlaceOrder() {
    if (document.getElementById("name").value === "") {
        alert("Você deve informar seu NOME antes de enviar o pedido");
        return false;
    }
    if (isNaN(parseInt(document.getElementById("minute").value))) {
        alert("Você deve informar os MINUTOS PARA ENTREGA antes de enviar o pedido");
        return false;
    }
    alert("Pedido Enviado com Sucesso");
    return true;
}

