import PermanentDrawerLeft from "../components/Drawer/Drawer"
import ResponsiveGrid from "../components/GridCards/Cards"
import "./Home.scss"

export default function Home() {
    return (
        <main>
            <PermanentDrawerLeft />
            <ResponsiveGrid />
        </main>
    )
}