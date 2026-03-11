import { NavTabsProps, Tab } from '../layout-props'
import './NavTabs.scss';

export default function NavTabs({activeTab, onChange}: NavTabsProps) {

const tabs: Tab[] = ['scoreboard', 'results', 'schedule', 'admin']
  return (
    <div className='chbi-nav-tab-container'>
      <ul className='chbi-nav-tab-list'>
        {tabs.map((tab) => (
          <li key={tab} className={`chbi-nav-tab-item ${tab === activeTab ? 'chbi-nav-tab-item--active' : ''}`} onClick={() => onChange(tab)}>{tab}</li>
        ))}
      </ul>
    </div>
  )
}