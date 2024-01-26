import { useState } from "react"
import { DataDisplayWrapper } from "../assets/wrappers/DataDisplay.styles"
import Wrapper from "../assets/wrappers/cmsDisplay.styles"
import { DefaultButton } from "../components/elements/Button/Button.styles"
import { Input } from "../components/elements/Input/Input"
import Modal from "../components/patterns/Modal"
import PageHeader from "../components/patterns/PageHeader"
import Sidebar from "../components/patterns/Sidebar"
import {ClientsData} from '../utils/ClientsData'
const Clients = () => {
    const[isModalOpen, setIsModalOpen] = useState(false)
    const dataheader = ['Name & Email', 'Phone No',]
    const onAddClient = () =>{

    }
    const onCloseModal = () => {
        setIsModalOpen(!isModalOpen)
    }
  return (
    <>
        <Wrapper>
            <main className='cms-display'>
                <Sidebar/>
                <div style={{position:'relative'}}>
                <PageHeader>
                    <DefaultButton onClick={()=>setIsModalOpen(true)}>Add client</DefaultButton>
                </PageHeader>
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
            {
                isModalOpen &&
                <Modal title="Add client" onConfirm={onAddClient} buttonLabel="Book" closeModal={onCloseModal}>
                    <div className='modal-content'>
                        <Input label="Full name" placeholder="Julliet Johnson"/>
                        <Input label="Email" placeholder="e.g johndoe@gmail.com"/>
                        <Input label="Phone No" placeholder="e.g 057837383"/>
                    </div>
                </Modal>
            }
        </Wrapper>
    </>
  )
}

export default Clients