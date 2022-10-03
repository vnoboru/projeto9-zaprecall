import { useState } from "react";
import styled from "styled-components";
import play from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png";
import ContainerBotoes from "./ContainerBotoes";

function CardQuestao(props) {
  const { contador, setContador, imprimirImagem, setImprimirImagem } = props;
  const { id, questao, resposta } = props.quest;
  const [mudarPrimeira, setMudarPrimeira] = useState(false);
  const [mudarSegunda, setMudarSegunda] = useState(false);
  const [cor, setCor] = useState("");
  const [icone, setIcone] = useState(play);
  const [data, setData] = useState("flashcard-show-btn");

  return (
    <>
      <PerguntaFechada
        data-identifier="flashcard"
        desabilitar={mudarPrimeira ? "none" : ""}
      >
        <p data-identifier="flashcard-index-item" className={cor}>
          Pergunta {id}
        </p>
        <img
          data-identifier={data}
          src={icone}
          alt={icone}
          onClick={() => setMudarPrimeira(true)}
        />
      </PerguntaFechada>

      {mudarPrimeira && (
        <Pergunta desabilitar={mudarSegunda ? "none" : ""}>
          <p data-identifier="flashcard-question">{questao}</p>
          <img
            data-identifier="flashcard-turn-btn"
            src={virar}
            alt="virar"
            onClick={() => setMudarSegunda(true)}
          />
        </Pergunta>
      )}

      {mudarSegunda && (
        <Pergunta>
          <p data-identifier="flashcard-answer">{resposta}</p>
          <ContainerBotoes
            setMudarPrimeira={setMudarPrimeira}
            setMudarSegunda={setMudarSegunda}
            setCor={setCor}
            setIcone={setIcone}
            contador={contador}
            setContador={setContador}
            setData={setData}
            imprimirImagem={imprimirImagem}
            setImprimirImagem={setImprimirImagem}
          />
        </Pergunta>
      )}
    </>
  );
}

export default function ListaQuestoes(props) {
  const {
    deckquestoes,
    contador,
    setContador,
    imprimirImagem,
    setImprimirImagem,
  } = props;
  return (
    <>
      {deckquestoes.map((quest) => (
        <CardQuestao
          key={quest.id}
          quest={quest}
          contador={contador}
          setContador={setContador}
          imprimirImagem={imprimirImagem}
          setImprimirImagem={setImprimirImagem}
        />
      ))}
    </>
  );
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 55px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: ${(props) => props.desabilitar};

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  .vermelho {
    color: var(--cor-nao-lembrei);
    text-decoration: line-through;
  }

  .laranja {
    color: var(--cor-quase-nao-lembrei);
    text-decoration: line-through;
  }

  .verde {
    color: var(--cor-zap);
    text-decoration: line-through;
  }
`;

const Pergunta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: ${(props) => props.desabilitar};

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
