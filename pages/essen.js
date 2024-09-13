import MenuHeader from "@/components/menu-header";

export default function Essen() {
  return (
    <>
      <div>
        <MenuHeader>Essen</MenuHeader>
      </div>
      <h3>
        Verpflegung durch
        <span>
          <a href="https://www.h3-schmeckt.de/cms/h3-schmeckt-start.html">
            H3-Group
          </a>
        </span>
        <p>
          Der Speiseplan kann unter dem
          <a href="https://bestellung.h3-essen.de/">Login</a>
          eingesehen werden
        </p>
      </h3>
    </>
  );
}
