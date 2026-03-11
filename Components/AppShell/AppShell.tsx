import Header from "../layout/Header/Header";
import { AppShellProps } from "../layout/layout-props";
import StatusBar from "../layout/StatusBar/StatusBar";
import "./AppShell.scss";

export default function AppShell({ activeTab, onChange,  children }: AppShellProps) {
  return (
    <div className="chbi-lifting-app-shell">
      <Header activeTab={activeTab} onChange={onChange} />
      <div className="chbi-lifting-app-shell-container">{children}</div>
      <StatusBar />
    </div>
  );
}
