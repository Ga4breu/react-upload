import React from 'react'
import './PerdaTrafos.css'
import trafo1 from '../../assets/Trafos1.svg';
import trafo2 from '../../assets/Trafos2.svg';
import trafo3 from '../../assets/Trafos3.svg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Blog = () => {
  return (
    <div className="pt-body" id="blog">
      <h2 className="pttitle">PERDA DE TRANSFORMADORES</h2>
      <div className="pt-content">
        <div className="pttexto">
            <h4 >Está contingência retrata a perda dos transformadores entre as barras 2458-896 e 934-933, ambos na região Sul, como mostra a Figura 1. </h4>    
            <h4>Com isso, a região superior do subsistema Sul fica praticamente isolada, com apenas a Usina de Salto Osório (919), a hidrelétrica de menor porte da Área 2, e apenas uma linha de transmissão de 230 kV que mantem a conexão com o restante do sistema. Mas esse circuito é longo se conecta com o centro de cargas do Sul, o que dificulta o envio de potência. 

Desse modo, foi aumentada a geração de potência ativa em Salto Osório para o seu máximo e foi necessário realizar o corte de carga para manter a maior parte dessa região em operação. Assim, realizou-se o corte de 50% da carga em Cascavel (2458), uma carga alta e no extremo final da nova região criada, como ilustra a Figura 2. </h4>
            <h4>Ainda, após o corte de carga, duas linhas ficaram sobrecarregadas e trabalharam em emergência, como é mostrado nas linhas hachuradas da Figura 3. Também é mostrado o percentual de carregamento de cada linha, sendo uma linha com 109% e outra em 101% do seu carregamento normal. </h4>
        </div>
        <div className="imgwrapper-pt">
              <img src={trafo1} alt="sistema nortesul"/>
              <img src={trafo2} alt="sistema nortesul"/>
              <img src={trafo3} alt="sistema nortesul"/>
            </div>
        </div>
    </div>
  )
}

export default Blog