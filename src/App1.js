import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Main() {
    return (
        <>
            <h4>Concord</h4>
            <div>What about the city? Concord is nearby, and, well, the people there have only shot at me a few times...</div>
            <div>— <i>Codsworth</i></div>
        </>
    )
}

function About() {
    return (<>
        <h4>About city</h4>
        <div>The town of Concord was founded in 1635; signs noting the year can be seen entering the town from the west and south. On April 17, 1775, British soldiers in the area were involved in the initiative to "quell the growing tide of revolution" under the command of General Thomas Gage. Gage had received orders from the Earl of Dartmouth four days prior to see all artillery, ammunition, provisions, and weaponry held by the colonists of Concord destroyed.</div>
    </>
    )
}

function FamousLandmark() {
    return (
        <>
            <h4>Landmark of the city</h4>
            <img
                src="https://static.wikia.nocookie.net/fallout/images/6/69/Fo4_Museum_of_Freedom.png"
                alt="Minuteman Museum of Concord"
            />
            <div>
                <b>Minuteman Museum: </b>This museum is a symbol of the Minutemen's
                history and their struggle for independence in the United States.
            </div>
        </>
    )
}

function Landmarks() {
    return (
        <>
            <h4>Landmarks of the city</h4>
            <ul>
                <li> Minuteman Museum. </li>
                <li> Old North Bridger. </li>
                <li> Thoreau House. </li>
            </ul>
        </>
    )
}

function Views() {
    return (
        <>
            <h4>Views of city</h4>
            <img
                src="https://static.wikia.nocookie.net/fallout/images/c/cd/FO4_Conc_ext_13.jpg"
                alt="Bird's-eye view of Concord"
            />
            <img
                src="https://static.wikia.nocookie.net/fallout/images/5/55/Concord_Aerial.jpeg"
                alt="Aerial view of Concord"
            />
            <img
                src="https://static.wikia.nocookie.net/fallout/images/d/dd/FO4_Concord_%281%29.jpg"
                alt="Concord Church"
            />
        </>
    )
}

function NotFound() {
    return (
        <h2>Not found</h2>
    )
}

export default function App1() {

    const [isContentVisible, setContentVisible] = useState(true);
    const toggleContent = () => {
        setContentVisible(prevState => !prevState);
    };

    return (
        <Router>
            <fieldset className='App1'>
                <legend>TASK 1</legend>
                <button
                    onClick={toggleContent}
                    className={isContentVisible ? '' : 'on'}
                >
                    <img
                        className={isContentVisible ? 'img-visibility-off' : 'img-visibility'}
                        alt='visibility'
                    />
                </button>
                <div
                    className={isContentVisible ? '' : 'display-none'}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/famous-landmark" element={<FamousLandmark />} />
                        <Route path="/landmarks" element={<Landmarks />} />
                        <Route path="/views" element={<Views />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </fieldset>
        </Router>
    );
}
