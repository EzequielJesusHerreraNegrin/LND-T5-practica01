import React from 'react'
import styles from './Card.module.css'
import PropTypes from 'prop-types'

const Card = ({ characters }) => {


    function isAlive() {
        if (characters.status === "Alive") {
            return 'alive-status';
        } else if (characters.status === "Dead") {
            return 'death-status';
        }
    }

    return (
        <div className='Container'>
            <div className="card__wrapper">
                <div className="card__header">
                    <div className="card__item--image"></div>
                    <p className={`${isAlive()}`} >{characters.status}</p>
                    <p className={`${isAlive()}`} >{characters.name}</p>
                </div>
                <div className="card__body">
                    <card className="card__characterInfo">
                        <card className="card__characterInfo card__characterInfo--stat01">
                            <i class="fa-solid fa-person-dress"></i>

                        </card>
                    </card>
                </div>
                <div className="card__footer">
                    <div className="card__footer card__footer--buttom1"></div>
                    <div className="card__footer card__footer--buttom2"></div>
                </div>
            </div>
        </div>
    )
}

Card.prototype = {
    characters: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.string,
        species: PropTypes.string,
        gender: PropTypes.string,
        origin: PropTypes.string,
        location: PropTypes.string,
        created: PropTypes.string,
    }).isRequired
}

export default Card