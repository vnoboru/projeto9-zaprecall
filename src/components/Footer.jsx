import styled from "styled-components";

export default function Footer(props) {
  return (
    <FooterContainer>
      <div>
        <ButtonError>Não lembrei</ButtonError>
        <ButtonAlmost>Quase não lembrei</ButtonAlmost>
        <ButtonZap>Zap!</ButtonZap>
      </div>
      0/8 CONCLUÍDOS
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

  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }

  button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
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
