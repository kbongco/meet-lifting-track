import Header from "../layout/Header/Header";
import { AppShellProps } from "../layout/layout-props";
import StatusBar from "../layout/StatusBar/StatusBar";
import "./AppShell.scss";

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="chbi-lifting-app-shell">
      <Header />
      <div className="chbi-lifting-app-shell-container">{children}</div>
      <StatusBar />
    </div>
  );
}
