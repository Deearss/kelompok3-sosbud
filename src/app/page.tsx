"use client";

import React, { useState } from "react";
import { Sidebar, type TabId } from "@/components/layout/Sidebar";
import PembagianTugasPanel from "@/components/panels/PembagianTugasPanel";
import PanduanPenulisanPanel from "@/components/panels/PanduanPenulisanPanel";
import KerangkaMakalahPanel from "@/components/panels/KerangkaMakalahPanel";
import { useAppStore } from "@/store/useAppStore";

export default function Home() {
  const activeTab = useAppStore((state) => state.activeTab);
  const setActiveTab = useAppStore((state) => state.setActiveTab);
  
  const [progressWidth, setProgressWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Tab switching with progress bar animation (matches original script.js behavior)
  const handleTabSwitch = (tab: TabId) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setSidebarOpen(false); // close drawer on mobile after tab switch

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
      {/* Top progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-accent2 z-50 transition-all duration-300 ease-out"
        style={{ width: `${progressWidth}%`, opacity }}
      />

      {/* Mobile header bar — hidden on md+ */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-surface border-b border-border flex items-center px-4 gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-9 h-9 flex flex-col justify-center gap-1.5 group"
          aria-label="Buka menu"
        >
          <span className="block h-0.5 w-5 bg-textDim rounded-full transition-colors group-hover:bg-textColor" />
          <span className="block h-0.5 w-4 bg-textDim rounded-full transition-colors group-hover:bg-textColor" />
          <span className="block h-0.5 w-5 bg-textDim rounded-full transition-colors group-hover:bg-textColor" />
        </button>
        <div className="font-montserrat text-[0.9rem] font-extrabold text-textColor">
          Kelompok <span className="text-accent">3</span>
          <span className="text-textDim font-medium"> · Project Hub</span>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/60"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex h-screen w-full">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleTabSwitch}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Offset for mobile header */}
        <main className="flex-1 px-5 py-8 md:px-12 md:py-10 overflow-y-auto pt-22 md:pt-10">
          {activeTab === "tugas" && <PembagianTugasPanel />}
          {activeTab === "panduan" && <PanduanPenulisanPanel />}
          {activeTab === "kerangka" && <KerangkaMakalahPanel />}
        </main>
      </div>
    </>
  );
}
