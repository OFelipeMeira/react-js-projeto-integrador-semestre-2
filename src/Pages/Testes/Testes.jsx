// import React, { useEffect } from 'react'
import "./testeStyle.css";

const Teste = () => {
  const data = [10, 20, 32, 7];

  // const maxValue = Math.max(...data)

  return (
    <div>
      {/* <div className="grafico">
        {
          data.map( item =>{
            return (
            <span key={item} style={{ "--size":`${ item*100/maxValue }%`,
                           "--length":data.length }}></span>
            )
          })
        }

      </div> */}

      <nav className="header w-scren h-12 bg-orange-500 ">
        <h1 className="text-orange-500">Teste q n funfa</h1>
      </nav>
    </div>
  );
};

export default Teste;
