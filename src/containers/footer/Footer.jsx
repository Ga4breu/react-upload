import React from 'react'
import './footer.css'
import gbmunhoz1 from '../../assets/gbmunhoz1.png'
import gbmunhoz2 from '../../assets/gbmunhoz2.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Footer = () => {
  return (
    <div className="gb-body" id="Footer">
      <h2 className="clevetitle">DIMINUINDO O CARREGAMENTO</h2>
      <div className="gb-content">
          <div className="gbtexto">
              <h4 >Está contingência simula a perda da Usina de Governador Bento Munhoz (barra 800), a hidrelétrica de maior porte do subsistema Sul. Com a perda dessa Usina, tem-se dois pontos principais para analisar: o primeiro, do ponto de vista do sistema, é realocar um montante de 1365 MW de potência ativa (valor despachado no caso base) e segundo, do ponto de vista numérico, é determinar uma nova barra de referência para o sistema. </h4>    
              <h4>Nesse sentido, a geração ativa de Governador Bento Munhoz foi remanejada para as Usinas de Ita (904), Salto Santiago (925), Machadinho (915) e Salto Osório (919). Entretanto, com o aumento da geração nessas Usinas, a linha de transmissão entre as barras 933-856 (Areia - Salto Segredo) ficou muito carregado, assim, reduziu-se o despacho de Salto Segredo Segredo, deixando a linha com 94% de carregamento. </h4>
          </div>
          <div className="imgblock-gb">
            <div className="imgwrapper-gb">
                <img src={gbmunhoz1} alt="GBmunhoz"/>
                <img src={gbmunhoz2} alt="GBmunhoz"/>
            </div>
      </div>
    </div>
    </div>
  );
}

export default Footer