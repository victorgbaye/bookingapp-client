import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"
import { DataDisplayWrapper } from "../assets/wrappers/DataDisplay.styles"
import {barberShopServices} from '../utils/ServicesData'
import Panel from "../components/patterns/Panel"
import { Input } from "../components/elements/Input/Input"
import UploadService from "../components/patterns/UploadService"
import { DefaultButton } from "../components/elements/Button/Button.styles"
import { useState } from "react"

const Services = () => {
    const dataheader = ['Service', 'Price']
    const [showNewServicePanel, setShowNewServicePanel] = useState(false)
    
  return (
    <Wrapper>
        <main className='cms-display'>
            <Sidebar/>
            <div style={{position: 'relative'}}>
            <PageHeader>
                <DefaultButton onClick={()=> setShowNewServicePanel(true)}>New Service</DefaultButton>
            </PageHeader>
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
        {
            showNewServicePanel &&
            <Panel
            title="New service"
            showPanel={showNewServicePanel}
            ClosePanel={()=> setShowNewServicePanel(false)}
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
        }
    </Wrapper>
  )
}

export default Services