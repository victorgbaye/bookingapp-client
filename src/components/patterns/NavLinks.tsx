import links from '../../utils/Links'

const NavLinks = () => {
  return (
    <div className='nav-links'>
        {
            links.map((link)=>{
                const { text, icon } = link;
                return(
                    <div
                    className='nav-link'
                    key={text}
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
