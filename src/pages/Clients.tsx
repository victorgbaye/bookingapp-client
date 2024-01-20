import { DataDisplayWrapper } from "../assets/wrappers/DataDisplay.styles"
import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"
import {ClientsData} from '../utils/ClientsData'
const Clients = () => {
    const dataheader = ['Name & Email', 'Phone No',]
  return (
    <Wrapper>
        <main className='cms-display'>
            <Sidebar/>
            <div >
            <PageHeader/>
            <div className='body'>
                <DataDisplayWrapper>
                    <header>
                        {dataheader.map((header)=><p>{header}</p>)}
                    </header>
                    {
                        ClientsData.map((client)=>{
                            return(
                                <>
                                   
                                    <main >
                                        <div className='row'>
                                            <span>
                                                {client.name}
                                                <p>{client.email}</p>
                                            </span>
                                            <div className='test'>
                                                <p>{client.phone}</p>
                                                <p>...</p>
                                            </div>
                                        </div>
                                    </main>
                                </>
                            )
                        })
                    }
                </DataDisplayWrapper>
            </div>
            </div>
        </main>
    </Wrapper>
  )
}

export default Clients