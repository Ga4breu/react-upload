import React from 'react'
import './CasoBase.css'
import sistema from '../../assets/sistema.svg';
import tabela1 from '../../assets/tabela1.png';
import { BsArrowRight } from 'react-icons/bs';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Header = () => {
  return (
    <div className='isee_header_padding'>
      <div className='isee_header-conteudo'>
        <h3 className='texto_gradiente'>Este blog compila os resultados do estudo de um sistema de potência em regime permanente da disciplina de Introdução aos Sistemas de Energia Elétrica – ISEE, do curso de Engenharia Elétrica da Universidade Estadual do Oeste do Paraná. O grupo é formado por quatro integrantes: Bruno Oliveira, Gabriel Abreu, Leonardo Nizer e Rafael Marodin (na guia “Quem somos” há mais informações sobre cada integrante). O objetivo deste trabalho é realizar uma análise sistêmica e, a partir disso, extrair informações relevantes para levantar hipóteses fundamentadas na teoria de sistemas de potência nas situações problemáticas propostas. Essas hipóteses foram postas para validação, buscando identificar as relações causa-efeito com base no raciocínio indutivo. </h3>
        <div className='pointer'>
        <BsArrowRight size={70} /></div>
        <div className='isee_header-image'>
          <TransformWrapper>
            <TransformComponent>
              <img src={sistema} alt="sistema nortesul"/>
            </TransformComponent>
          </TransformWrapper>
        <h4 className='texto-img'>Imagem Ampliável</h4>
        </div>
        </div>
        <div className='conteudowrapper'>
          <div className='texto-cbase'>
          <h3>A partir disso, o estudo foi desenvolvido no sistema de 65 barras Sul-Sudeste (ALVES, 2007) seguindo os critérios estabelecidos pelo ONS (Operador Nacional do Sistema) e com auxílio da ferramenta computacional ANAREDE. 
          O ONS determina que, para o estudo de sistema de potência em corrente alternada, devem ser analisadas as condições de carregamento pesado, médio e leve. Além disso, a rede deve estar sujeita a uma certa variabilidade de contingências, tais como perdas de linhas, transformadores e outros equipamentos, com objetivo de definir ações para que o SIN (Sistema Interligado Nacional) opere sem perda de cargas e sem violações inadmissíveis dos seus limites operativos. 
          Dentre os limites operativos, o ONS determina as tensões entre fases admissíveis para a operação normal e em emergência em 60 Hz, apresentadas na Tabela ao lado.</h3>
          <h5>ALVES, W. F. (2007). Proposição de sistemas-teste para análise computacional de sistemas de potência (Dissertação) - Pós-Graduação em Computação, Universidade Federal Fluminense – UFF, Niterói.  </h5>
          </div>
          <div className='image1'>
            <img src={tabela1} alt="sistema nortesul"/>
          </div>
        </div>
        <div className='casobase'id="Header">
          <h3> O CASO BASE </h3>
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