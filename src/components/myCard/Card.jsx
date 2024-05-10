import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPerson,
  faPersonDress,
  faMars,
  faVenus,
  faLocationDot,
  faCalendar,
  faCommentDots,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ character }) => {
  function isAlive() {
    if (character.status === "Alive") {
      return styles.alive_status;
    } else if (character.status === "Dead") {
      return styles.death_status;
    }
  }

  console.log(`${isAlive()}`);

  const isMale = character.gender === "Male";

  const date = new Date(character.created);
  const dateConstructor = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const characterDate = date.toLocaleDateString("es-ES", dateConstructor);

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card__wrapper}>
          <div className={styles.card__header}>
            <div className="card__item--image">
              <img
                className={`image ${styles.avatar}`}
                src={`src/assets/images/${character.id}.jpeg`}
              ></img>
            </div>
            <div className={styles.header__info__wrapper}>
              <p className={styles.header__name}>{character.name}</p>
              <p
                className={`${
                  character.status === `Alive`
                    ? styles.status_alive
                    : styles.status_dead
                }`}
              >
                {character.status}
              </p>
            </div>
          </div>
          <div className="card__body">
            <card className={styles.card__characterInfo}>
              <card className="card__characterInfo card__characterInfo--stat01">
                <p>
                  {isMale ? (
                    <FontAwesomeIcon
                      className={styles.card__icons}
                      icon={faPerson}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={styles.card__icons}
                      icon={faPersonDress}
                    />
                  )}{" "}
                  {character.species}
                </p>
              </card>
              <card className="card__characterInfo card__characterInfo--stat02">
                <p>
                  {isMale ? (
                    <FontAwesomeIcon
                      className={styles.card__icons}
                      icon={faMars}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={styles.card__icons}
                      icon={faVenus}
                    />
                  )}{" "}
                  {character.gender}
                </p>
              </card>
              <card className="card__characterInfo card__characterInfo--stat03">
                <p>
                  <FontAwesomeIcon
                    className={styles.card__icons}
                    icon={faLocationDot}
                  />
                  {character.origin}
                </p>
              </card>
              <card className="card__characterInfo card__characterInfo--stat04">
                <p>
                  <FontAwesomeIcon
                    className={styles.card__icons}
                    icon={faCalendar}
                  />
                  {characterDate}
                </p>
              </card>
            </card>
          </div>
          <div className="card__footer">
            <div className={styles.card__footer__buttom}>
              <button className={styles.card__buttom1}>
                <FontAwesomeIcon icon={faUser} />
                Perfil
              </button>
              <button className={styles.card__button2}>
                <FontAwesomeIcon
                  className={styles.card__button}
                  icon={faCommentDots}
                />
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  character: {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    location: PropTypes.string,
    created: PropTypes.string,
  },
};

export default Card;
