export interface NavTabsProps {
  activeTab: Tab
  onChange: (tab: Tab) => void
}

export interface AppShellProps {
  activeTab: Tab
    onChange: (tab: Tab) => void
  children?: React.ReactNode;
}

export interface HeaderProps {
  activeTab: Tab
  onChange: (tab: Tab) => void
}

export type Tab = 'scoreboard' | 'results' | 'schedule' | 'admin'