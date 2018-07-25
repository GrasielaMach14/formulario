function enviar() {

  var nome = document.getElementById("nome");

  if(nome.value != ""){

    alert("Obrigado"+nome.value+" por preencher seus dados!");

  } else {

    alert("Por gentileza, digite seus dados.");

  }
}
