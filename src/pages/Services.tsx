import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"
import { DataDisplayWrapper } from "../assets/wrappers/DataDisplay.styles"
import {barberShopServices} from '../utils/ServicesData'
import Panel from "../components/patterns/Panel"
import { Input } from "../components/elements/Input/Input"
import UploadService from "../components/patterns/UploadService"

const Services = () => {
    const dataheader = ['Service', 'Price']
    
  return (
    <Wrapper>
        <main className='cms-display'>
            <Sidebar/>
            <div style={{position: 'relative'}}>
            <PageHeader/>
            <div className='body' style={{marginTop:'80px', overflowY: 'auto', maxHeight: 'calc(100vh - 80px)'}}>
            <DataDisplayWrapper>
                    <header>
                        {dataheader.map((header)=><p>{header}</p>)}
                    </header>
                    {
                        barberShopServices.map((service)=>{
                            return(
                                <>
                                   
                                    <main >
                                        <div className='row'>
                                            <span>
                                                <p>{service.service}</p>
                                            </span>
                                            <div className='test'>
                                                <p>{service.price}</p>
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
        <Panel
        title="New service"
        >
            <div className="panel-content">
                <Input
                label="Name"
                placeholder="e.g Hair cut"
                />
                <Input
                label="Price"
                placeholder="e.g £32"
                />
                <UploadService/>
            </div>
        </Panel>
    </Wrapper>
  )
}

export default Services