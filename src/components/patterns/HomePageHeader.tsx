import {useState} from 'react'
import PageHeader from './PageHeader'
import { DefaultButton, TransparentButton } from '../elements/Button/Button.styles'
import Modal from './Modal'
import { Input } from '../elements/Input/Input'
import copy from '../../assets/images/copy.svg'
import { VisualBell } from '../../assets/wrappers/VisualBell.styles'

const HomePageHeader = () => {
    const [shareLinkModal, setShareLinkModal] = useState(false)
    const [createBookingModal, setCreateBookingModal] = useState(false)
    const [copied, setCopied] = useState(false);
    const [showVisualBell, setShowVisualBell] = useState(false);


    const linkURL = 'www.businessname.nwah.com';
    const onCopyLink = () => {
    console.log(copied);
    
        try {
          navigator.clipboard.writeText(linkURL);
          setCopied(true);
          setShowVisualBell(true)
          setTimeout(() => {
              setShowVisualBell(false)
          }, 2500);
        } catch (error) {
          console.error('Unable to copy text to clipboard:', error);
        }
      };
    const handleCopy = () => {
        setCopied(true);
      };
  return (
    <div>
        <PageHeader>
            <TransparentButton onClick={()=> setShareLinkModal(true)}>Share Link</TransparentButton>
            <DefaultButton onClick={()=> setCreateBookingModal(true)}>Create Booking</DefaultButton>
        </PageHeader>
        {
            shareLinkModal &&
            <Modal
            title='Share link'
            closeModal={()=>setShareLinkModal(false)}
            buttonLabel='Copy link'
            onConfirm={onCopyLink}

            >
                <div className='link-text'>
                    <p>{linkURL}</p>
                    <img src={copy} alt='copy' onClick={onCopyLink}/>
                </div>
            </Modal>
        }
        {
            createBookingModal &&
            <Modal
            title='Book appointment'
            closeModal={()=>setCreateBookingModal(false)}
            buttonLabel='Book'
            onConfirm={handleCopy}

            >
                <div className='modal-content'>
                    <Input label='Full name' placeholder='John Doe'/>
                    <Input label='Email' placeholder='e.g johndoe@gmail.com'/>
                    <Input label='Phone number' placeholder='e.g 053989982'/>
                    <Input label='Select service' placeholder=''/>
                </div>
            </Modal>
            
        }
        {
        showVisualBell &&
         <VisualBell>Link Copied</VisualBell>
        }
    </div>
  )
}

export default HomePageHeader