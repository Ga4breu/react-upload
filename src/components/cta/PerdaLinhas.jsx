import React from 'react'
import './PerdaLinhas.css'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import sistema from '../../assets/sistema.svg';
const CTA = () => {
  return (
    <div className="pss-body" id="CTA">
      <h2 className="psstitle">PERDA DA INTERLIGAÇÃO SUL-SUDESTE </h2>
      <div className="pss-content">
        <div className="psstexto">
            <h4 >Ao perder as linhas entre as barras de Bateias (895) e Ibiúna (122), o sistema perda a sua interligação entre as áreas e tem-se algumas implicações. Primeiro, do ponto de vista matemático, a Área 1 fica sem barra de referência, assim, adotou-se a São Simão (303) como nova referência, pois dispõem de uma ampla margem de geração de ativos e geração ou consumo de reativos. Com isso, o ANAREDE calcula o fluxo de carga isolado para cada região. Segundo, é esperado que ambas as áreas consigam suprir suas demandas, pois esse é o principal motivo dessa divisão. 

O estado do intercâmbio de potência entre as áreas no caso base era de transferência de potência ativa do Área 2 para Área 1 (Sul para Sudeste), dessa forma, no momento que ambas as regiões ficam isoladas, a Usina de São Simão gera mais ativos e a Usina de Governador Bento Munhoz (800), barra de referência no Sul, gera menos ativos. Como ilustra a Figura 1.   </h4>    
            <h4>Além disso, outra implicação dessa contingência foi um problema de subtensão em Campinas (123), no centro de cargas da região Sudeste, devido a grande distância do centro de geração, mostrado na Figura 2. </h4>
            <h4>Mas em virtude dessa distância entre a demanda e  geração, o centro de cargas do sudeste dispõe de banco de capacitores e banco de reatores para corrigir possíveis problemas de tensão. Neste caso, na barra 345 de Campinas foram ligados dois bancos de capacitores de 100 MVAr cada, reestabelecendo a tensão dentro dos limites operativos.  </h4>
        </div>
        <div className="imgwrapper-pss">
        <TransformWrapper>
                <TransformComponent>
                <img src={sistema} alt="sistema nortesul"></img>
                </TransformComponent>
              </TransformWrapper>
        </div>
    </div>
  </div>
  )
}

export default CTA