import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"
import Tabs from "../components/patterns/Tabs"
import Availability from "./Availability"
import Profile from "./Profile"

const Settings = () => {
  const tabsData = [
    { label: 'Availability', content: <Availability/> },
    { label: 'Profile', content: <Profile/> },
  ];
  return (
    <Wrapper>
        <main className='cms-display'>
            <Sidebar/>
            <div style={{position:'relative'}}>
              <PageHeader/>
              <div className="body">
                <Tabs tabs={tabsData}/>
              </div>

            </div>
        </main>
    </Wrapper>
  )
}

export default Settings