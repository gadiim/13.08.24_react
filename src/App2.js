import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './task_2/Main';
import About from './task_2/About';
import FamousLandmark from './task_2/FamousLandmark';
import Landmarks from './task_2/Landmarks';
import Views from './task_2/Views';
import NotFound from './task_2/NotFound';
import Navigation from './task_2/Navigation';


export default function App1() {

    const [isContentVisible, setContentVisible] = useState(true);
    const toggleContent = () => {
        setContentVisible(prevState => !prevState);
    };

    return (
        <Router>
            <fieldset className='App2'>
                <legend>TASK 2</legend>
                <button
                    onClick={toggleContent}
                    className={isContentVisible ? '' : 'on'}
                >
                    <img
                        className={isContentVisible ? 'img-visibility-off' : 'img-visibility'}
                        alt='visibility'
                    />
                </button>
                <Navigation />
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
