import { Wrapper } from "../../assets/wrappers/Panel.styles"
import { DefaultButton, TransparentButton } from "../elements/Button/Button.styles"
import x from '../../assets/images/x.svg'

interface PanelProps{
    children: React.ReactNode;
    title: string;
    showPanel: boolean
    ClosePanel: ()=> void
}

const Panel: React.FC<PanelProps>= ({children, title, showPanel, ClosePanel}) => {
  return (
    <Wrapper className={showPanel ? `open`: ''}>
        <div className="panel">
            <header className="panelHeader">
                <p>{title}</p>
                <img src={x} className='closeBtn' alt="Close Button" onClick={ClosePanel}/>

            </header>
            <section>{children}</section>
            <footer className="PanelAction">
                <DefaultButton>Save</DefaultButton>
                <TransparentButton onClick={ClosePanel}>cancel</TransparentButton>
            </footer>
        </div>
    </Wrapper>
  )
}

export default Panel