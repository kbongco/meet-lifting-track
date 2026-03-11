export interface NavTabsProps {
  activeTab: Tab
  onChange: (tab: Tab) => void
}

export interface AppShellProps {
  children: React.ReactNode;
}

type Tab = 'scoreboard' | 'results' | 'schedule' | 'admin'