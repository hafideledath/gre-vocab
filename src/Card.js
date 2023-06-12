import './Card.css';
import despair from './despair.svg';
import ennui from './ennui.svg';
import grief from './grief.svg';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faVolumeLow, faEllipsis, faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const cards = [
    {
        "word": "Despair",
        "pronunciation": "/dɪˈsper/",
        "illustration": despair,
        "definition": "(n.) the feeling that there is no hope and that you can do nothing to improve a difficult situation",
        "synonyms": "distress, anguish, pain, desperation, unhappiness",
        "example": "The person who lives by hope will die by <span class='opaque'>despair</span>."
    }, {
        "word": "Ennui",
        "pronunciation": "/ɒnˈwiː/",
        "illustration": ennui,
        "definition": "(n.) a feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.",
        "synonyms": "boredom, tedium, listnessness, lethargy",
        "example": "Life creates itself in delirium and is undone in <span class='opaque'>ennui</span>."
    }, {
        "word": "Grief",
        "pronunciation": "/griːf/",
        "illustration": grief,
        "definition": "(n.) intense sorrow, especially caused by someone's death.",
        "synonyms": "angst, agony, misery, heartache, desolation",
        "example": "<span class='opaque'>Grief</span> is not something you can go underneath or around."
    }
]

function Card() {
    const [pageIndex, setPageIndex] = useState(0);
    const card = cards[pageIndex];

    function incrementPage() {
        if (pageIndex < 2) {
            setPageIndex(pageIndex + 1);
        }
    }

    function decrementPage() {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    }

    return (
        <div className="Card">
            <div className="card">
                <header>
                    <FontAwesomeIcon className="icon" icon={faCaretLeft} onClick={decrementPage} />
                    <div className="word">
                        <h1>{card['word']}</h1>
                        <div className="pronunciation">
                            <h6>{card['pronunciation']}</h6>
                            <FontAwesomeIcon className="sound" icon={faVolumeLow} />
                        </div>
                    </div>
                    <FontAwesomeIcon className="icon" icon={faCaretRight} onClick={incrementPage} />
                </header>
                <div className="content">
                    <img className="illustration" src={card['illustration']} alt="Ennui" />
                    <div className="dictionary">
                        <p className="definition">{card['definition']}</p>
                        <p className="synonyms">{card['synonyms']}</p>
                    </div>
                </div>
                <p className="example" dangerouslySetInnerHTML={{ __html: card['example'] }} />
                <div className="CTAs">
                    <FontAwesomeIcon className="icon" icon={faEllipsis} />
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <FontAwesomeIcon className="icon" icon={faShareNodes} />
                </div>
            </div>
        </div>
    );
}

export default Card;
