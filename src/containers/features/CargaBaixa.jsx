import React from "react";
import './CargaBaixa.css'
import leve from '../../assets/cargalevetunado.svg'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Features = () => {
  return (
    <div className="cargaleve-body" id="features">
      <h2 className="clevetitle">DIMINUINDO O CARREGAMENTO</h2>
      <div className="cargaleve-content">
          <div className="cargalevetexto">
              <h4 >A carga de um sistema de distribuição varia constantemente. Com a redução do consumo de potência do sistema, é esperado que este apresente tensões mais elevadas. Dessa forma, a fim de verificar as áreas mais sensíveis a sobretensão, optou-se por reduzir uniformemente a carga do sistema em passos de 1% para que sejam monitoradas as tensões. De forma análoga, reduz-se também a geração do sistema em 1% uma vez que essa energia não será mais consumida. 
              O sistema comporta uma redução de até 20% de carga total sem exceder nenhum limite. Porém, a partir desse ponto de operação, nota-se que ao reduzir-se mais a potência consumida, algumas barras da região Sul (Blumenau, Curitiba, Salto Caxias, etc.) passam para um estado de sobretensões. Em virtude disso, faz-se necessária a ativação de reatores shunt chaveados já presentes no sistema. Com a ativação desses reatores é possível continuar a redução de carga do sistema em até 30%. A figura ao lado ilustra a região com sobretensão. </h4>    
              <h4>Considerando que o sistema opera com carga média equivalente ao caso base, suportar um consumo de até 30% menos potência estabelece uma boa margem de segurança de operação, uma vez que reduções maiores são altamente improváveis. </h4>
          </div>
          <div className="imgblock-cargaleve">
            <div className="imgwrapper-cargaleve">
            <TransformWrapper>
              <TransformComponent>
                <img src={leve} alt="leve"/>
              </TransformComponent>
            </TransformWrapper>
            </div>
      </div>
    </div>
    </div>
  );
}


export default Features;