import React from "react";

export default function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[260px] mx-auto rounded-[2rem] border-[6px] border-gray-200 bg-white shadow-xl overflow-hidden shrink-0">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 py-1.5 bg-white text-[10px] text-gray-400 border-b border-gray-50">
        <span className="font-semibold text-gray-600">9:41</span>
        <div className="flex items-center gap-1 text-gray-400">
          <span>●●●●</span>
          <span className="ml-1">▲</span>
          <span>▮▮▮</span>
        </div>
      </div>
      {/* Screen content */}
      <div className="h-[480px] overflow-hidden bg-gray-50">{children}</div>
    </div>
  );
}
