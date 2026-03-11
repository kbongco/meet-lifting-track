'use client';
import "./page.scss";
import AppShell from "@/Components/AppShell/AppShell";
import { useState } from 'react';
import { Tab } from "@/Components/layout/layout-props";
export default function Home() {

  const [activeTab, setActiveTab] = useState<Tab>('scoreboard');
  

  return (
    <>
      <AppShell activeTab={activeTab} onChange={setActiveTab}>
        <div style={{ padding: '20px', color: 'white' }}>
          current tab: {activeTab}
          </div>
      </AppShell>
    </>
  );
}
