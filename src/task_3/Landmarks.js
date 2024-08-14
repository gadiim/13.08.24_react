import { Outlet } from "react-router-dom";

function Landmarks() {
    return (
        <>
            <h4>Landmarks of the city</h4>
            <Outlet />
        </>
    )
}
export default Landmarks;