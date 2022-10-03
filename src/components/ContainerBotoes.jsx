import styled from "styled-components";
import certo from "../assets/img/icone_certo.png";
import quase from "../assets/img/icone_quase.png";
import erro from "../assets/img/icone_erro.png";

export default function ContainerBotoes(props) {
  const {
    setMudarPrimeira,
    setMudarSegunda,
    setCor,
    setIcone,
    contador,
    setContador,
    setData,
    imprimirImagem,
    setImprimirImagem,
  } = props;
  return (
    <Container>
      <ButtonError
        data-identifier="forgot-btn"
        onClick={() => {
          setMudarPrimeira(false);
          setMudarSegunda(false);
          setCor("vermelho");
          setIcone(erro);
          setContador(contador + 1);
          const imprimir = [...imprimirImagem, { imagem: erro }];
          setImprimirImagem(imprimir);
          setData("flashcard-status");
        }}
      >
        Não lembrei
      </ButtonError>
      <ButtonAlmost
        data-identifier="almost-forgot-btn"
        onClick={() => {
          setMudarPrimeira(false);
          setMudarSegunda(false);
          setCor("laranja");
          setIcone(quase);
          setContador(contador + 1);
          const imprimir = [...imprimirImagem, { imagem: quase }];
          setImprimirImagem(imprimir);
          setData("flashcard-status");
        }}
      >
        Quase não lembrei
      </ButtonAlmost>
      <ButtonZap
        data-identifier="zap-btn"
        onClick={() => {
          setMudarPrimeira(false);
          setMudarSegunda(false);
          setCor("verde");
          setIcone(certo);
          setContador(contador + 1);
          const imprimir = [...imprimirImagem, { imagem: certo }];
          setImprimirImagem(imprimir);
          setData("flashcard-status");
        }}
      >
        Zap!
      </ButtonZap>
    </Container>
  );
}

const Container = styled.div`
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
