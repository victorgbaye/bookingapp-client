import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"
import { DataDisplayWrapper } from "../assets/wrappers/DataDisplay.styles"
import {barberShopServices} from '../utils/ServicesData'

const Services = () => {
    const dataheader = ['Service', 'Price']
    
  return (
    <Wrapper>
        <main className='cms-display'>
            <Sidebar/>
            <div>
            <PageHeader/>
            <div className='body'>
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
    </Wrapper>
  )
}

export default Services