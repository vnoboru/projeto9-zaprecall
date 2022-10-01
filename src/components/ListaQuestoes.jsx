import styled from "styled-components";
import play from "../assets/img/seta_play.png";

function CardQuestao(props) {
    const {id} = props;
    console.log(id);
  return (
    <PerguntaFechada>
      <p>Pergunta {id}</p>
      <img src={play} alt="seta_play" />
    </PerguntaFechada>
  );
}

export default function ListaQuestoes(props) {
  const { deckquestoes } = props;
  console.log(deckquestoes, "lista");
  return (
    <>
      {deckquestoes.map((quest) => (
        <CardQuestao key={quest.id} id={quest.id}/>
      ))}
    </>
  );
}

const PerguntaFechada = styled.button`
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

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
