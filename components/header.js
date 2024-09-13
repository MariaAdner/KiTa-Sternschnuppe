import styled from "styled-components";

const Top = styled.h1`
  color: darkblue;
  margin: 30px;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function Header() {
  return (
    <>
      <Top> Kita Sternschnuppe </Top>
      <Text>Informationen für Eltern</Text>
    </>
  );
}
