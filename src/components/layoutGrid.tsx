"use client";

import React from "react";

interface LayoutGridProps {
  children: React.ReactNode;
}

const LayoutGrid = ({ children }: LayoutGridProps) => {
  return (
    <div className="max-w-[1440px] p-8 flex items-center justify-center h-screen">
      {children}
    </div>
  );
};

export default LayoutGrid;
