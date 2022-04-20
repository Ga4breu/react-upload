import React from 'react'
import './CargaSamambaia.css'
import samambaia1 from '../../assets/Samambaia1.svg';
import samambaia2 from '../../assets/Samambaia2.svg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Possibilities = () => {
  return (
    <div className="csamambaia-body" id="possibilities">
      <h2 className="csamambaiatitle">AUMENTO DE 60% NA CARGA DA BARRA 234 (SAMAMBAIA)</h2>
      <div className="csamambaia-content">
        <div className="cargasamambaiatexto">
            <h4 >Para o aumento de 60% da carga em Samambaia, sabe-se que as usina de Emborcação, Nova Ponte e Jaguará (Figura 1) tem grandes influências sobre a tensão na barra de Samambaia, portanto é necessário o controle da potência reativa consumida por essas usinas para manter a tensão em Samambaia dentro dos limites desejados de 0,95 pu e 1,05 pu.   </h4>    
            <h4>No entanto, essas usinas estão com o número máximo de unidades geradoras sincronizadas no sistema e estão consumindo o máximo de potência reativa devido a grande produção de reativos proveniente das linhas de transmissão. 
                A fim de investigar como o aumento de carga na barra 233 impactaria no sistema, foi realizado o aumento da potência reativa de 1000 MW para 1600 MW, com isso os gerados passam a consumir muitos reativos pelo fato das linhas de transmissão longas, como citado anteriormente.  
                Com o aumento da potência ativa, o sistema não apresentou a violação de nenhum dos limites de tensão ou geração, porém as usinas citadas na Fig. 1 estão em seu máximo consumo de reativos e é necessário um aumento na tensão dessas usinas, ou seja, é necessário a produção de reativos por partes delas para que a tensão na barra 233 aumente e não apresente subtensão proveniente do aumento de carga de 60% que está sendo realizado na barra. Ajustando a tensão nas barras 300, 301 e 302 foi possível manter a tensão na barra 233 dentro do limite de 0,95 pu. 
                Por fim, realiza-se o aumento da potência reativa consumida pela carga na barra 233 e verifica-se que as usinas do Sudeste não conseguem manter a tensão na barra 233 dentro do limite de 0,95 pu devido, novamente, as usinas de Emborcação, Nova Ponte e Jaguará estarem em seus limites de consumo de reativos e não poderem ajudar no controle de tensão na barra 233. 
                Portanto, é proposto a alocação de um capacitor shunt na barra 233 para a injeção de reativos e, como consequência, elevar a tensão na barra 233 para dentro do limite de 0,95 pu como mostra a Figura 2. Sendo assim, foi possível um aumento de 60% da carga na barra 233. Ressaltando que está é uma medida de expansão do sistema e não de operação.  </h4>
        </div>
        <div className="imgwrapper-cargasamambaia">
        <TransformWrapper>
                <TransformComponent>
                  <img src={samambaia1} alt="sistema nortesul"/>    
                </TransformComponent>
              </TransformWrapper>
              <TransformWrapper>
                <TransformComponent>
                  <img src={samambaia2} alt="sistema nortesul"/>
                </TransformComponent>
              </TransformWrapper>
        </div>
    </div>
  </div>
  )
}

export default Possibilities