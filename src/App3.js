import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './task_3/Main';
import About from './task_3/About';
import FamousLandmark from './task_3/FamousLandmark';
import Landmarks from './task_3/Landmarks';
import Views from './task_3/Views';
import NotFound from './task_3/NotFound';
import Navigation from './task_3/Navigation';
import LandmarkListBuilder from './task_3/LandmarkListBuilder';
import Landmark from './task_3/Landmark';


export default function App3() {

    const [isContentVisible, setContentVisible] = useState(true);
    const toggleContent = () => {
        setContentVisible(prevState => !prevState);
    };

    return (
        <Router>
            <fieldset className='App3'>
                <legend>TASK 3</legend>
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
                        <Route path="/landmarks" element={<Landmarks />}>
                            <Route index element={<LandmarkListBuilder />} />
                            <Route path=':id' element={<Landmark />} />
                        </Route>
                        <Route path="/views" element={<Views />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </fieldset>
        </Router>
    );
}
