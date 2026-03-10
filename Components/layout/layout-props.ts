export interface NavTabsProps {
  activeTab: Tab
  onChange: (tab: Tab) => void
}

type Tab = 'scoreboard' | 'results' | 'schedule' | 'admin'