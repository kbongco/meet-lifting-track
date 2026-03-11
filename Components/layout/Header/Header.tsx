import Badge from "@/Components/ui/Badge/Badge";
import NavTabs from "../NavTabs/Navtabs";
import './Header.scss';

export default function Header() {
  return (
    <>
      <div className='chbi-lifting-header-container'>
        <div className='chbi-lifting-app-name'>
          <span className='chbi-lifting-logo'>*insert creative name*</span>
        </div>
        <div className='chbi-lifting-meet-container'>
          <span>
            <p className='chbi-lifting-meet-name'>2026 Nationals - Open Raw</p>
            <p className='chbi-lifting-sub-header-name'>Platform 1 - Session 2 - 3rd Attempt</p>
          </span>
        </div>
        <div className='chbi-lifting-header-badge-container'>
          <Badge badgeType="success">Live</Badge>
        </div>
        <NavTabs />
      </div>
    </>
  );
}
