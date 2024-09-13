import styled from "styled-components";

const Head = styled.h1`
  text-align: center;
  color: darkblue;
  margin: 20px;
`;

export default function MenuHeader(props) {
  return <Head>{props.children}</Head>;
}
