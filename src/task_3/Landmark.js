import { useParams } from 'react-router-dom';
import landmarks from './landmarksList';

function Landmark() {
    const params = useParams();
    const Id = parseInt(params.id, 10);
    const landmark = landmarks.find(p => p.id === Id);
    if (landmark === undefined)
        return <p>No landmark with this Id</p>
    else
        return (
            <>
                <img
                    src={landmark.img}
                    alt={landmark.name + ' of Concord'}
                />
                <div>
                    <b>{landmark.name}: </b>{landmark.description}
                </div>
            </>)
}

export default Landmark;