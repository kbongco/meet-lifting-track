import Image from "next/image";
import "./page.scss";
import Button from "@/Components/ui/Button/Button";
import Badge from "@/Components/ui/Badge/Badge";
import { Card, CardHeader, CardBody } from "@/Components/ui/Card/Card";
export default function Home() {
  return (
    <div>
      <h1 className="test">Test</h1>
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
      <div style={{ marginBottom: "16px" }}>
        <Card>
          <CardHeader title="Weigh-Ins & Equipment Check"
            extraButton={<Badge badgeType={"completed"}>Done</Badge>}
          ></CardHeader>
          <CardBody>
            <span style={{ display: 'flex', gap: '0.5rem' }}>
          <p style={{marginBottom: 0, marginTop: 0}}>All Athletes</p>
              <p style={{ color: '#4a6070', marginBottom: 0, marginTop: 0 }}>Duration:</p><p style={{ marginBottom: 0, marginTop: 0 }}>2hrs</p>
               <p style={{ color: '#4a6070', marginBottom: 0, marginTop: 0  }}>Room:</p><p style={{marginBottom: 0, marginTop: 0}}>Hall B</p>
            </span></CardBody>
        </Card>
      </div>
      <div style={{ marginTop: "16px" }}>
        <Card>
          <CardHeader
            title="Session 1 -- F63 M74 - Open Raw"
            extraButton={<Badge badgeType={"success"}>Live Now</Badge>}
          ></CardHeader>
          <CardBody>
            <span style={{display: 'flex', gap:'0.5rem'}}>
              <p style={{ color: '#4a6070', marginBottom: 0, marginTop: 0 }}>Lifters:</p><p style={{marginBottom: 0, marginTop: 0}}>22</p>
              <p style={{ color: '#4a6070', marginBottom: 0, marginTop: 0  }}>Platform:</p><p style={{marginBottom: 0, marginTop: 0}}>2</p>
              <p style={{ color: '#4a6070', marginBottom: 0, marginTop: 0 }}>Progress:</p><p style={{ color: '#00e676', marginBottom: 0, marginTop: 0 }}>62% complete</p>
              <p style={{ color: '#4a6070', marginBottom: 0, marginTop: 0 }}>Est. End:</p><p style={{marginBottom: 0, marginTop: 0}}>~5:45 PM</p>
            </span>
            <div style={{ paddingTop: "0.5rem", display: 'flex', gap: '0.5rem' }}>
              <Badge badgeType={"success"}>Platform 1-Flight A Sq R3</Badge>
              <Badge badgeType={"completed"}>Platform 2-Flight B Bp R2</Badge>
            </div>
          </CardBody>
        </Card>
      </div>

    </div>
  );
}
