import { Link } from 'react-router-dom';
import links from '../../utils/Links'

const NavLinks = () => {
  return (
    <div className='nav-links'>
        {
            links.map((link)=>{
                const { text, icon, path } = link;
                return(
                        <Link
                        className='nav-link'
                        key={text}
                        to={ `/${path}`} style={{textDecoration:'none', color:'inherit'}}
                        // onClick={()=>{window.location.pathname = path}}

                        >
                            < img className='icon' src={icon}/>
                            <p >{text}</p>
                        </Link>
                )
            })
        }
    </div>
  )
}

export default NavLinks
