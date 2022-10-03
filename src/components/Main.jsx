import { useState } from "react";
import styled from "styled-components";
import ListaQuestoes from "./ListaQuestoes";
import Header from "./Header";
import Footer from "./Footer";
import DECKQUESTOES from "../deck";

export default function Main() {
  const [contador, setContador] = useState(0);
  const [imprimirImagem, setImprimirImagem] = useState([]);
  return (
    <>
      <ContainerPrincipal>
        <Header />
        <ListaQuestoes
          deckquestoes={DECKQUESTOES}
          contador={contador}
          setContador={setContador}
          imprimirImagem={imprimirImagem}
          setImprimirImagem={setImprimirImagem}
        />
      </ContainerPrincipal>
      <Footer contador={contador} imprimirImagem={imprimirImagem}/>
    </>
  );
}

const ContainerPrincipal = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
