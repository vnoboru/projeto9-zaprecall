import styled from "styled-components";

export default function Footer(props) {
  const { contador, imprimirImagem } = props;
  return (
    <FooterContainer data-identifier="flashcard-counter">
      {" "}
      {contador} /8 CONCLUÍDOS
      <Imagens>
        {imprimirImagem.map((value, index) => (
          <img src={value.imagem} key={index} alt="logo" />
        ))}
      </Imagens>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const Imagens = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 5px;
  gap: 5px;
`;
