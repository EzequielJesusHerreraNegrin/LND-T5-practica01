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
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ character }) => {
  function isAlive() {
    if (character.status === "Alive") {
      return "alive-status";
    } else if (character.status === "Dead") {
      return "death-status";
    }
  }

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
        <div className="card__wrapper">
          <div className="card__header">
            <div className="card__item--image">
              <img
                className={`image ${styles.avatar}`}
                src={`src/assets/images/${character.id}.jpeg`}
              ></img>
            </div>
            <p className={`${isAlive()}`}>{character.name}</p>
            <p className={`${isAlive()}`}>{character.status}</p>
          </div>
          <div className="card__body">
            <card className="card__characterInfo">
              <card className="card__characterInfo card__characterInfo--stat01">
                <p>
                  {isMale ? (
                    <FontAwesomeIcon icon={faPerson} />
                  ) : (
                    <FontAwesomeIcon icon={faPersonDress} />
                  )}{" "}
                  {character.species}
                </p>
              </card>
              <card className="card__characterInfo card__characterInfo--stat02">
                <p>
                  {isMale ? (
                    <FontAwesomeIcon icon={faMars} />
                  ) : (
                    <FontAwesomeIcon icon={faVenus} />
                  )}{" "}
                  {character.gender}
                </p>
              </card>
              <card className="card__characterInfo card__characterInfo--stat03">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {character.origin}
                </p>
              </card>
              <card className="card__characterInfo card__characterInfo--stat04">
                <p>
                  <FontAwesomeIcon icon={faCalendar} />
                  {characterDate}
                </p>
              </card>
            </card>
          </div>
          <div className="card__footer">
            <div className="card__footer card__footer--buttom1"></div>
            <div className="card__footer card__footer--buttom2"></div>
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
