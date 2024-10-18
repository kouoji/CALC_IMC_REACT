import React from "react";

function Calculadora() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const peso = event.target.peso.value;
    const altura = event.target.altura.value;
    const resultado = peso / altura ** 2;
    if (resultado < 17) {
      alert("Você está muito abaixo do peso.");
    } else if (resultado >= 17 && resultado <= 18.5) {
      alert("Você está abaixo do peso.");
    } else if (resultado >= 18.6 && resultado <= 24.9) {
      alert("Você está no peso normal.");
    } else if (resultado >= 25 && resultado <= 29.9) {
      alert("Você está acima do peso.");
    } else {
      alert("Você está obeso.");
    }
    alert(`Seu IMC é: ${resultado.toFixed(2)}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Digite seu peso:
          <input type="number" step={0.1} name="peso" required />
        </label>
        <br />
        <br />
        <label>
          Digite sua altura:
          <input type="number" step={0.01} name="altura" required />
        </label>
        <br />
        <br />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
}

export default Calculadora;
