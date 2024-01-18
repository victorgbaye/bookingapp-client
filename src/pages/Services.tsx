import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"

const Services = () => {
  return (
    <Wrapper>
        <main className='cms-display'>
            <Sidebar/>
            <PageHeader/>
        </main>
    </Wrapper>
  )
}

export default Services