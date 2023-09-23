import './DashboardPageStyle.css'
import Aside from "../../Layouts/Aside/Aside"
import SectionGraphs from '../../Layouts/SectionGraphs/SectionGraphs'

const DashboardPage = () => {
  return (
    <div className="DashboardPage">
        <Aside />
        <SectionGraphs />
    </div>
  )
}

export default DashboardPage