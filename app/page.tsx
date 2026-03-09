import Image from "next/image";
import './page.scss'
import Button from "@/Components/ui/Button/Button";
import Badge from "@/Components/ui/Badge/Badge";

export default function Home() {
  return (
    <div>
      <h1 className='test'>Test</h1>
      <Button buttonStyle={"good"}>Good Lift</Button>
      <Button buttonStyle={"bad"}>No Lift</Button>
      <Button buttonStyle={"primary"}>Primary</Button>
      <Button buttonStyle={"secondary"}>Secondary</Button>
      <Badge badgeType={"success"}>200</Badge>
      <Badge badgeType={"warning"}>210</Badge>
      <Badge badgeType={"success"}>Live</Badge>
      <Badge badgeType={"neutral"}>Done</Badge>
      <Badge badgeType={"neutral"}>Checked In</Badge>
      <Badge badgeType={"neutral"}>Upcoming</Badge>
    </div>
  );
}
