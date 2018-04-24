import React from 'react';
import { TimelineMax } from 'gsap';

import Grid from './Grid';
import Paulina from '../img/paulina.jpg';

class About extends React.Component {
  componentDidMount() {
    //TODO: refactor needed
    const targetObject1 = document.querySelector('.main__content-title');
    const targetObject2 = document.querySelector('.main__paragraph-list');
    const targetObject3 = document.querySelector('.about-photo');

    const stagingTimeline = new TimelineMax();

    stagingTimeline
      .from(targetObject1, 1, { y: 30, opacity: 0 })
      .from(targetObject2, 1, { y: 60, opacity: 0 })
      .from(targetObject3, 1, { y: -30, opacity: 0 })

      .add('end', 2)

      .to(targetObject1, 3, { y: 0, opacity: 1 }, 'end')
      .to(targetObject2, 3, { y: 0, opacity: 1 }, 'end')
      .to(targetObject3, 3, { y: 0, opacity: 1 }, 'end');

    stagingTimeline.play();
  }
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
