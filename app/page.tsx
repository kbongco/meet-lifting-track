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
          <CardHeader title="Weigh-Ins & Equipment Check"></CardHeader>
          <CardBody>All Athletes Duration: 2hrs Room: Hall B</CardBody>
        </Card>
      </div>
      <div style={{ marginTop: "16px" }}>
        <Card>
          <CardHeader
            title="Session 1 -- F63 M74 - Open Raw"
            extraButton={<Badge badgeType={"success"}>Live Now</Badge>}
          ></CardHeader>
          <CardBody>
            <span>
              <p style={{ color: '#4a6070', paddingBottom: 0 }}>Lifters:</p><p>22</p>
            </span>
            {/* Lifters: 22, Platforms: 2, Progress: 62% Complete, Est End: 5:45PM */}
            <div style={{ paddingTop: "0.5rem" }}>
              <Badge badgeType={"success"}>Platform 1-Flight A Sq R3</Badge>
              <Badge badgeType={"completed"}>Platform 2-Flight B Bp R2</Badge>
            </div>
          </CardBody>
        </Card>
      </div>

    </div>
  );
}
