export interface NavTabsProps {
  activeTab: Tab
  onChange: (tab: Tab) => void
}

export interface AppShellProps {
  children?: React.ReactNode;
}

export type Tab = 'scoreboard' | 'results' | 'schedule' | 'admin'