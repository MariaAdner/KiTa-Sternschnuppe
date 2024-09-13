import styled from "styled-components";
import Link from "next/link";

const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MenuLink = styled.li`
  width: 300px;
  height: 50px;
  border: 2px, solid, darkblue;
  border-radius: 20px;
  margin: 10px;
  list-style: none;
  padding: 25px;
  text-align: center;
  background-color: lightblue;
  color: darkblue;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MenuList() {
  return (
    <Menu>
      <Link href="/neuigkeiten">
        <MenuLink>Neuigkeiten</MenuLink>
      </Link>
      <Link href="/termine">
        <MenuLink>Termine</MenuLink>
      </Link>
      <Link href="/about">
        <MenuLink>Über uns</MenuLink>
      </Link>
      <Link href="/essen">
        <MenuLink>Essen</MenuLink>
      </Link>
      <Link href="/kontakt">
        <MenuLink>Kontakt</MenuLink>
      </Link>
      <Link href="/downloads">
        <MenuLink>Downloads</MenuLink>
      </Link>
    </Menu>
  );
}
