import PermanentDrawerLeft from "../components/Drawer/Drawer"
import GanreGrid from "../components/GanreGrid/GanreGrid"
export default function Ganre() {


    return (
        <>
            <PermanentDrawerLeft />
            <div className="ganre-container">
                <GanreGrid />
            </div>
        </>

    )
}