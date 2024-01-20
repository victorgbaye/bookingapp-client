import links from '../../utils/Links'

const NavLinks = () => {
  return (
    <div className='nav-links'>
        {
            links.map((link)=>{
                const { text, icon, path } = link;
                return(
                    <div
                    className='nav-link'
                    key={text}
                    onClick={()=>{window.location.pathname = path}}

                    >
                        < img className='icon' src={icon}/>
                        <p >{text}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default NavLinks
