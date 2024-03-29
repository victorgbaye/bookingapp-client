import Wrapper from "../../assets/wrappers/PageHeader.styles"
import circle from '../../assets/images/circle.svg'
// import { DefaultButton, TransparentButton } from "../elements/Button/Button.styles"

interface PageHeaderType{
  children?: React.ReactNode
}

const PageHeader:React.FC<PageHeaderType> = ({children}) => {
  return (
    <Wrapper>
        <section className='page-title'>
            <img src={circle}/>
            <p>{window.location.pathname.slice(1).charAt(0).toUpperCase() + window.location.pathname.slice(2)}</p>
        </section>
        <section className='header-actions'>
            {children}

        </section>
    </Wrapper>
  )
}

export default PageHeader