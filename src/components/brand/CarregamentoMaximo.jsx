import React from 'react';
import './CarregamentoMaximo.css';
import tabelinha from '../../assets/tabelapng.png';
const brand = () => {
  return (
    <div>
      <div className='brand-content' id="Brand">
        <h2 className='titulo-cmax'>AUMENTANDO O CARREGAMENTO DO SISTEMA</h2>
        <div className='para-img'>
          <div className='paragrafos'>
            <h4>Para realizar o carregamento máximo do sistema é necessário o aumento de todas as cargas do sistema de forma linear. Com o aumento da carga, espera-se que as tensões nas barras caiam, ou seja, iria causar subtensões ao longo do sistema, portanto é necessário o aumento de unidades geradores que estão atuando no sistema de 65 barras para manter o nível de tensão e suprir essas cargas.
            </h4>
            <h4>Para elevar a carga do sistema ao máximo, utilizou-se uma rotina do ANAREDE que eleva a carga de maneira linear, para este caso a elevação foi de 1% na potência ativa e reativa consumida por cada carga do sistema. Através da utilização do fluxo de potência continuado do ANAREDE com a rotina de incremento de carga, foi possível aumentar a carga do sistema de 10102,1 MW e 2457,6 MVar, que seria o consumo da carga das duas áreas obtidas no caso base do sistema, até 11043,3 MW e 2686,5 MVar totalizando um aumento de aproximadamente 10%.</h4>
            <h4>Para conseguir este aumento de carga foi necessário aumento na geração do sistema, ou seja, foi necessário disponibilizar que mais máquinas atuassem no sistema. Portanto, tinha-se 10381,7 MW e -776,5 MVar de geração no caso base provenientes dos geradores do sistema e atingiu-se 11454,5 MW e 1983,4 MVar de geração para suprir o as cargas e perdas no sistema, também foi necessário o chaveamento de capacitores shunts para manter o nível de tensão dentro dos limites estabelecidos pelo ONS.</h4>
            <h4>Conseguimos observar na Tabela 1, as condições de geração e consumo do sistema após a elevação da carga em 10%:</h4>
            <h4>Em relação ao caso base diminuiu-se a quantidade de perdas de MVar representando uma diminuição da geração de reativos da linha, portanto o sistema respondeu com um aumento na geração de potência reativa para suprir as cargas e o consumo de reativos das linhas.</h4>
          </div>
          <div className='table-text'>
            <img src={tabelinha} alt="sistema nortesul"></img>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default brand