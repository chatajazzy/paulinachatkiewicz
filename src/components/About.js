import React from 'react';
import wordpressIcon from '../icons/wordpress.svg';
import webpackIcon from '../icons/webpack.svg';
import sassIcon from '../icons/sass.svg';
import reactIcon from '../icons/react.svg';
import javascriptIcon from '../icons/javascript.svg';

const About = props => {
  return (
    <div className="main__container">
      <section className="main__section">
        <header className="main__title-container">
          <h2 className="main__title">O mnie</h2>
        </header>
        <ul className="about__info-list">
          <li className="about__info-item">
            <p className="about__ info-paragraph">
              Obecnie zajmuję się tworzeniem stron internetowych, a właściwie
              uczę się robić je jak najlepiej się da. Choć front-endem
              interesuję się już od jakiegoś czasu to realizuję się w nim od
              około 6 miesięcy.
            </p>
            <p className="about__ info-paragraph">
              Przez ten czas poznałam wiele zagadnień związanych z budową układu
              strony oraz jego dostosowywaniem do urządzeń mobilnych. Wiem co to
              RWD i jak ważne jest dzisiaj jego wdrożenie.
            </p>
            <p className="about__ info-paragraph">
              Swoją praktykę opieram na kodowaniu szablonów PSD. Potrafię
              napisać stronę od zera jak i korzystając z framework’a Bootstrap.
              Przy pracy korzystam głównie z systemu kontroli wersji GIT,
              programu graficznego Photoshop oraz IDE Sublime Text.
            </p>
          </li>
          <li className="about__info-item">
            <p className="about__ info-paragraph">
              Realizowane projekty zawsze staram się wdrażać biorąc pod uwagę
              wszelkie aspekty związane z ich poprawnością, wiernym oddaniem
              wyglądu oraz optymalizacją pod kątem szybkości działania.
            </p>
            <p className="about__ info-paragraph">
              Nie posiadam na dany moment komercyjnego doświadczenia jako front
              end developer, ale chcę to w najbliższym czasie zmienić.
            </p>
          </li>
          <li className="about__info-item">
            <p className="about__ info-paragraph">
              Jako osoba początkująca mogę zaoferować pełne zaangażowanie w
              zlecone zadania, szybkie przyswajanie nowej wiedzy oraz świeże
              spojrzenie na zagadnienia.
            </p>
          </li>
        </ul>
      </section>
      <section className="main__section main__section--dark">
        <header className="main__title-container">
          <h2 className="main__title main__title--light">Umiejętności</h2>
        </header>
        {/*TODO: check this animation with text sliding behind icons*/}
        <ul className="skills__list">
          <li className="skills__list-item">
            <img src={reactIcon} />
          </li>
          <li className="skills__list-item">
            <img src={sassIcon} />
          </li>
          <li className="skills__list-item">
            <img src={javascriptIcon} />
          </li>
          <li className="skills__list-item">
            <img src={wordpressIcon} />
          </li>
          <li className="skills__list-item">
            <img src={webpackIcon} />
          </li>
          <li className="skills__list-item">
            <img src={reactIcon} />
          </li>
          <li className="skills__list-item">
            <img src={sassIcon} />
          </li>
          <li className="skills__list-item">
            <img src={javascriptIcon} />
          </li>
          <li className="skills__list-item">
            <img src={wordpressIcon} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
