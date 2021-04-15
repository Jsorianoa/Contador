import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(1);
  const [contador2, setContador2] = useState(0);
  const add = () => {
    setContador(contador + 1);
  };

  const substract = () => {
    setContador(contador - 1);
  };

  const add2 = () => {
     setContador2(contador2 + contador);
  };
  const substract2 = () => {
     setContador2(contador2 - contador);
  };
  return (
    <div className="container-principal">
      <p className="description">Descripcion: Se implementa dos contadores, el lado izquierdo establece el numero de veces que aumenta en el segundo contador del lado derecho</p>
      <section>
        <div className="card">
          <h2>Numero de Veces que Aumentará</h2>
          <p>{contador}</p>
          <div className="container">
            <button onClick={add}>Sumar</button>
            <button onClick={substract}>Restar</button>
            <button onClick={() => setContador(1)}>Restablecer</button>
          </div>
        </div>
        <div className="card">
          <h1>Contador</h1>
          <p>{contador2}</p>
          <div className="container">
            <button onClick={add2}>Sumar</button>
            <button onClick={substract2}>Restar</button>
            <button onClick={() => setContador2(0)}>Restablecer</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
