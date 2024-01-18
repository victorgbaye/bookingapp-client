import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"
import Availability from "./Availability"
// import Profile from "./Profile"

const Settings = () => {
  return (
    <Wrapper>
        <main className='cms-display'>
            <Sidebar/>
            <div >
              <PageHeader/>
              <main className='content'>
                {/* <Profile/> */}
                <Availability/>
                <input type='checkbox'/>

              </main>
            </div>
        </main>
    </Wrapper>
  )
}

export default Settings