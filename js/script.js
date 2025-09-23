function media() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;

  if (!valor1 || !valor2) {
    alert("Por favor, digite valores numéricos válidos em ambos os campos.");
    return;
  }

  // Converte os valores para número e calcula a média
  let resultado = (parseFloat(valor1) + parseFloat(valor2)) / 2;
  let texto = document.getElementById("texto");
  texto.innerHTML = resultado;
}
