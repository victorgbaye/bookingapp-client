import { TabButton, TabContainer } from '../../assets/wrappers/Tabs.styles';
import Wrapper from '../../assets/wrappers/cmsDisplay.styles';

interface MenuTabsProps{
    status: Array<string>,
    filterItems: (status?: string | Array<string>) => void
    activeStatus: string | string[]
}
const Menu: React.FC<MenuTabsProps> = ({status, activeStatus, filterItems}) => {
  return (
    <Wrapper>
    <TabContainer className='tab-content'>
      {status.map((stat) => (
        <TabButton
          key={stat}
          onClick={()=>filterItems(stat)}
          style={{
            borderBottom: (activeStatus === stat || (stat === 'All' && activeStatus === 'any')) ? '2px solid #7C2C89' : 'none'
          }}
          isActive={true}
        >
          {stat}
        </TabButton>
      ))}
    </TabContainer>
  </Wrapper>
  )
}

export default Menu