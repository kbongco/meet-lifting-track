import './NavTabs.scss'

export default function NavTabs() {
  return (
    <div className='chbi-nav-tab-container'>
      <ul className='chbi-nav-tab-list'>
        <li className='chbi-nav-tab-item'>Scoreboard</li>
        <li className='chbi-nav-tab-item'>Results</li>
        <li className='chbi-nav-tab-item'>Schedule</li>
        <li className='chbi-nav-tab-item'>Admin</li>
      </ul>
    </div>
  )
}