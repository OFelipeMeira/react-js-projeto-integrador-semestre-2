// import React, { useEffect } from 'react'
import "./testeStyle.css";

const Teste = () => {
  const data = [10,40,100];

  const maxValue = Math.max(...data)

  return (
    <div>
      <div className="grafico">
        {
          data.map( item =>{
            return (
            <span key={item} style={{ "--size":`${ item*100/maxValue }%`,
                           "--length":data.length }}></span>
            )
          })
        }

      </div>
    </div>
  );
};

export default Teste;
