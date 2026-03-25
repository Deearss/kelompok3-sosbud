"use client";

import React, { useState } from "react";
import { Sidebar, type TabId } from "@/components/layout/Sidebar";
import PembagianTugasPanel from "@/components/panels/PembagianTugasPanel";
import PanduanPenulisanPanel from "@/components/panels/PanduanPenulisanPanel";
import KerangkaMakalahPanel from "@/components/panels/KerangkaMakalahPanel";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("tugas");
  const [progressWidth, setProgressWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);

  // Tab switching animation logic matching the original script.js
  const handleTabSwitch = (tab: TabId) => {
    if (tab === activeTab) return;
    
    setActiveTab(tab);
    
    // Progress bar animation
    setProgressWidth(0);
    setOpacity(1);
    
    setTimeout(() => setProgressWidth(70), 50);
    setTimeout(() => setProgressWidth(100), 250);
    setTimeout(() => {
      setOpacity(0);
      setProgressWidth(0);
    }, 550);
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-accent2 z-50 transition-all duration-300 ease-out"
        style={{ width: `${progressWidth}%`, opacity }}
      />
      <div className="flex min-h-screen relative z-10 w-full overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={handleTabSwitch} />
        
        <main className="flex-1 px-12 py-10 max-w-300 mx-auto w-full">
          {activeTab === "tugas" && <PembagianTugasPanel />}
          {activeTab === "panduan" && <PanduanPenulisanPanel />}
          {activeTab === "kerangka" && <KerangkaMakalahPanel />}
        </main>
      </div>
    </>
  );
}
