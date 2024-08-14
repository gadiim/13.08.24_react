import { NavLink } from 'react-router-dom';
import landmarks from './landmarksList';

function LandmarkListBuilder() {
    return (<>
        <ul>
            {
                landmarks.map(
                    function (item) {
                        return <li
                            key={item.id}><NavLink
                                to={`/landmarks/${item.id}`}>
                                {item.name}
                            </NavLink>
                        </li>
                    }
                )
            }
        </ul>
    </>
    )
}

export default LandmarkListBuilder;