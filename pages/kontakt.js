import MenuHeader from "@/components/menu-header";

export default function Kontakt() {
  return (
    <>
      <div>
        <MenuHeader>Kontakt</MenuHeader>
      </div>
      <>
        <div>
          <p>Haus-Leitung: Lydia Pech</p>
          <p>Stellvertretung: Christiane Günther</p>
        </div>
        <div>
          <p>Adresse: Fabrikstraße 11, 08297 Zwönitz</p>
          <p>Telefon: 037754 2855</p>
          <p>E-Mail: kita.sternschnuppe@zwoenitz.de</p>
        </div>
        <form
          action="SENDEADRESSE"
          id="ft-form"
          method="POST"
          accept-charset="UTF-8"
        >
          <fieldset>
            <label>
              Name
              <input type="text" name="Name" required />
            </label>
            <label>
              E-Mail-Adresse
              <input type="email" name="E-Mail" required />
            </label>
            <label>
              Ihre Nachricht
              <textarea rows="3" name="Nachricht" required></textarea>
            </label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="Datenverarbeitung bestätigt"
                  value="Ja"
                  required
                />
                Ich bestätige, dass ich mit der Verarbeitung meiner Eingaben zum
                Zwecke der Anfragebearbeitung, einverstanden bin.
              </label>
            </div>
          </fieldset>
        </form>
      </>
    </>
  );
}
