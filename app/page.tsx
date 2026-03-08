import Image from "next/image";
import './page.scss'
import Button from "@/Components/ui/Button/Button";

export default function Home() {
  return (
    <div>
      <h1 className='test'>Test</h1>
      <Button buttonStyle={"good"}>Good Lift</Button>
      <Button buttonStyle={"bad"}>No Lift</Button>
      <Button buttonStyle={"primary"}>Primary</Button>
      <Button buttonStyle={"secondary"}>Secondary</Button>
    </div>
  );
}
