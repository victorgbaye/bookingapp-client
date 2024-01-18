import Wrapper from "../../assets/wrappers/Bigsidebar.styles";
import NavLinks from './NavLinks'
import logout from '../../assets/images/logout.svg'
import profilePic from '../../assets/images/profilePic.svg'

const Sidebar = () => {
  return (
    <Wrapper>
        <div
            className='sidebar-container'
        >
            <header>
                LOGO
            </header>
            <NavLinks/>
            <footer>
                <span className='logout'>
                    <img src={logout}/>
                    <p>Logout</p>
                </span>
                <section>
                    <img src={profilePic}/>
                    <span>
                        <p>Julliet Johnson</p>
                        <p>Small Description text</p>
                    </span>
                </section>
            </footer>
        </div>

    </Wrapper>
  )
}

export default Sidebar