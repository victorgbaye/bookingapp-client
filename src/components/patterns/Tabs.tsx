import {useState} from 'react'
import { TabButton, TabContainer, TabContent } from '../../assets/wrappers/Tabs.styles';
import Wrapper from '../../assets/wrappers/cmsDisplay.styles';

interface TabProps {
    label: string;
    content: React.ReactNode;
  }
interface TabsProps {
    tabs: TabProps[];
  }

const Tabs: React.FC<TabsProps> = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
      };
  return (
    <Wrapper>
    <TabContainer className='tab-content'>
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          isActive={index === activeTab}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabContainer>
    <TabContent>{tabs[activeTab].content}</TabContent>
  </Wrapper>
  )
}

export default Tabs