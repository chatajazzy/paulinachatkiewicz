import React from 'react';
import Grid from './Grid';
import Paulina from '../img/paulina.jpg';

class About extends React.Component {
  render() {
    return (
      <div className="main__wrapper">
        <Grid />
        <section className="main__content">
          <header className="main__content-header">
            <h2 className="main__content-title">o mnie</h2>
          </header>
          <div className="main__inner-wrapper main__inner-wrapper--about">
            <ul className="main__paragraph-list">
              <li>
                <p className="main__content-paragraph">
                  Obecnie zajmuję się tworzeniem stron internetowych, a
                  właściwie uczę się robić je jak najlepiej się da. Choć
                  front-endem interesuję się już od jakiegoś czasu to realizuję
                  się w nim od około 6 miesięcy.
                </p>
                <p className="main__content-paragraph">
                  Przez ten czas poznałam wiele zagadnień związanych z budową
                  układu strony oraz jego dostosowywaniem do urządzeń mobilnych.
                  Wiem co to RWD i jak ważne jest dzisiaj jego wdrożenie.
                </p>
              </li>
              <li>
                <p className="main__content-paragraph">
                  Nie posiadam na dany moment komercyjnego doświadczenia jako
                  front end developer, ale chcę to w najbliższym czasie zmienić.
                </p>
                <p className="main__content-paragraph">
                  Jako osoba początkująca mogę zaoferować pełne zaangażowanie w
                  zlecone zadania, szybkie przyswajanie nowej wiedzy oraz świeże
                  spojrzenie na zagadnienia.
                </p>
              </li>
              <li>
                <p className="main__content-paragraph">
                  Realizowane projekty zawsze staram się wdrażać biorąc pod
                  uwagę wszelkie aspekty związane z ich poprawnością, wiernym
                  oddaniem wyglądu oraz optymalizacją pod kątem szybkości
                  działania.
                </p>
              </li>
              <li>
                <p className="main__content-paragraph">
                  Jako osoba początkująca mogę zaoferować pełne zaangażowanie w
                  zlecone zadania, szybkie przyswajanie nowej wiedzy oraz świeże
                  spojrzenie na zagadnienia.
                </p>
                <figure className="about-photo">
                  <img
                    src={Paulina}
                    alt="Paulina Chatkiewicz"
                    className="about-photo__img"
                  />
                </figure>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
