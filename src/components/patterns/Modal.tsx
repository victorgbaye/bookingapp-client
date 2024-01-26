import x from '../../assets/images/x.svg'
import { Wrapper } from '../../assets/wrappers/Modal.styles';
import {  ExtendedButton } from '../elements/Button/Button.styles';

interface ModalTypes{
    prompt?:string;
    title:string;
    closeModal: ()=> void;
    children: React.ReactNode;
    onConfirm: ()=> void;
    buttonLabel: string;
    backgroundColor?: string;

}

const Modal: React.FC<ModalTypes> = ({prompt, title, closeModal, buttonLabel, onConfirm, children, backgroundColor}) => {
  return (
    <Wrapper>
    <div className='Modal'>
        <header className='ModalHeader'>
            <h6>{title}</h6>
            <img src={x} alt="X Icon"  onClick={closeModal}/>
        </header>
        <div className='ModalBody'>
          <p>{prompt}</p>
          
        </div>
        <div className='ModalBody'>
        {children}
        </div>
        {

        <div className='ModalFooter'>
           <ExtendedButton onClick={onConfirm} backgroundColor={backgroundColor}>{buttonLabel}</ExtendedButton>
           <ExtendedButton onClick={closeModal} color='#222' border='none' backgroundColor='none'>Cancel</ExtendedButton>

          {/* <Button 
          onClick={onConfirm}
          label={buttonLabel}
          style={{padding:'12px 20px', width:'auto', background: confirmColor, border:'none', outline:'none', color:`${theme == 'dark' && deleteColor =='#FFF' ? deleteColor: theme =='light' ? '#FFF' : theme =='dark' ? '#1A1A1A'  :''}`}}
          />
          <Button
          label='Cancel'
          style={{padding:'12px 20px', width:'auto', background: 'none', border:'none', outline:'none', color:`${theme =='light' ? '#333' : '#F5F5F5'}`}}
          onClick={closeModal}
          /> */}
        </div>
        }
    </div>
</Wrapper>
  )
}

export default Modal