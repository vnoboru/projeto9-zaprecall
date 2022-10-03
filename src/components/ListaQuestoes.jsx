import { useState } from "react";
import styled from "styled-components";
import play from "../assets/img/seta_play.png";
import virar from "../assets/img/seta_virar.png";

function CardQuestao(props) {
  const { id, questao, resposta } = props.quest;
  const [mudarPrimeira, setMudarPrimeira] = useState(false);
  const [mudarSegunda, setMudarSegunda] = useState(false);
  const [cor, setCor] = useState("");

  return (
    <>
      <PerguntaFechada desabilitar={mudarPrimeira ? "none" : ""}>
        <p className={cor}>Pergunta {id}</p>
        <img src={play} alt="play" onClick={() => setMudarPrimeira(true)} />
      </PerguntaFechada>

      {mudarPrimeira && (
        <Pergunta desabilitar={mudarSegunda ? "none" : ""}>
          <p>{questao}</p>
          <img src={virar} alt="virar" onClick={() => setMudarSegunda(true)} />
        </Pergunta>
      )}

      {mudarSegunda && (
        <Pergunta>
          <p>{resposta}</p>
          <ContainerBotoes>
            <ButtonError
              onClick={() => {
                setMudarPrimeira(false);
                setMudarSegunda(false);
                setCor("vermelho");
              }}
            >
              Não lembrei
            </ButtonError>
            <ButtonAlmost
              onClick={() => {
                setMudarPrimeira(false);
                setMudarSegunda(false);
                setCor("laranja");
              }}
            >
              Quase não lembrei
            </ButtonAlmost>
            <ButtonZap
              onClick={() => {
                setMudarPrimeira(false);
                setMudarSegunda(false);
                setCor("verde");
              }}
            >
              Zap!
            </ButtonZap>
          </ContainerBotoes>
        </Pergunta>
      )}
    </>
  );
}

export default function ListaQuestoes(props) {
  const { deckquestoes } = props;
  return (
    <>
      {deckquestoes.map((quest) => (
        <CardQuestao key={quest.id} quest={quest} />
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

const ContainerBotoes = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  button {
    width: 80px;
    height: 40px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    border-radius: 5px;
    padding: 5px;
  }
`;

const ButtonError = styled.button`
  background-color: var(--cor-nao-lembrei);
`;

const ButtonAlmost = styled.button`
  background-color: var(--cor-quase-nao-lembrei);
`;

const ButtonZap = styled.button`
  background-color: var(--cor-zap);
`;
