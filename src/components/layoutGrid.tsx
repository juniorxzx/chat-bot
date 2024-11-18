"use client";

import React from "react";

interface LayoutGridProps {
  children: React.ReactNode;
}

const LayoutGrid = ({ children }: LayoutGridProps) => {
  return <div className="max-w-[1440px] ">{children}</div>;
};

export default LayoutGrid;
