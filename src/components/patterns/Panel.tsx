import { Wrapper } from "../../assets/wrappers/Panel.styles"
import { DefaultButton, TransparentButton } from "../elements/Button/Button.styles"
import x from '../../assets/images/x.svg'

interface PanelProps{
    children: React.ReactNode;
    title: string;
}

const Panel: React.FC<PanelProps>= ({children, title}) => {
  return (
    <Wrapper>
        <div className="panel">
            <header className="panelHeader">
                <p>{title}</p>
                <img src={x} className='closeBtn' alt="Close Button" />

            </header>
            <section>{children}</section>
            <footer className="PanelAction">
                <DefaultButton>Save</DefaultButton>
                <TransparentButton>cancel</TransparentButton>
            </footer>
        </div>
    </Wrapper>
  )
}

export default Panel