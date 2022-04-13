import React from 'react'
import './header.css'
import sistema from '../../assets/sistema.svg';
import { BsArrowRight } from 'react-icons/bs';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Header = () => {
  return (
    <div className='isee_header_padding'>
      <div className='isee_header-conteudo'>
        <h1 className='texto_gradiente'>O intuito deste Blog é analisar o sistema de potência disposto ao lado. Separado em região sul e sudeste, o diagrama representa ramificações reais do Sistema Interligado Nacional. </h1>
        <div className='pointer'>
        <BsArrowRight size={70} /></div>
        <div className='isee_header-image'>
          <TransformWrapper>
            <TransformComponent>
              <img src={sistema} alt="sistema nortesul" />
            </TransformComponent>
          </TransformWrapper>
        <h4 className='texto-img'>Imagem Ampliável</h4>
        </div>
        </div>
        <div className='paragrafos1'>
            <h4>Primeiramente, nos são fornecidos dados básicos do sistema, como geração de potência ativa nas barras e impedância equivalente dos transformadores. A partir desses é necessário determinar os parâmetros equivalentes para realizar a simulações e os estudos de caso, necessários para confirmar expectativas de operação do sistema.
            </h4>
            <h4>Inicialmente necessita-se determinar a quantidade de geradores que devem ser ligados a cada barra do sistema, a fim de fornecer a potência ativa especificada inicialmente. Os geradores possuem limites de geração máximo e mínimo para operarem em regime no sistema de transmissão. Dessa forma, basta dividir a geração da potência ativa pré-determinada para a barra em foco pela geração mínima dos transformadores e arredondar o resultado obtido para o inteiro de maior valor mais próximo.</h4>
            <h4>Cada gerador é associado a um transformador responsável por conectá-lo no sistema de distribuição. Dessa forma, com o número de gerados ativos já determinado, pode-se simplificar de forma inteligente a análise do sistema adotando-se um gerador equivalente e seu respectivo trafo no lugar de vários geradores com seus trafos. Define-se, portanto, que a geração mínima e máxima do equivalente é igual a soma das mínimas e máximas de cada gerador e a impedância equivalente do trafo é a associação em paralelo das impedâncias dos trafos de cada gerador.</h4>
            <h4>Finalmente, é possível determinar, por meio de simulações, qual é o estado de operação do sistema nessa configuração. Percebe-se, portanto, que a barra de Cascavel apresenta subtensão (definida como tensão abaixo de 0,95 p.u.). Para o sistema continuar em operação é necessário que esse esteja dentro dos limites de segurança pré-estabelecidos, portanto, sem subtensões</h4>
            <h4>Com o intuito de determinar qual é a alteração mais efetiva a se realizar é conveniente realizar-se a análise de sensibilidade da tensão que se deseja alterar. Essa análise nada mais é do que o valor da derivada parcial da tensão objetivo em relação as tensões passíveis de alteração no sistema, sendo que, quanto maior o valor obtido, maior é a interação entre as duas componentes. Dessa forma, eleva-se a tensão em Cascavel-Oeste e elimina-se o problema de subtensão, obtendo-se, por fim, o estado de operação base do qual derivar-se-á outros estudos.</h4>
        </div>
      </div>
  )
}
 
export default Header