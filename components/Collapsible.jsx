import React from 'react';
import { BsPlus } from 'react-icons/bs';

export default function Collapsible({
  collapsed, children, text, icon,
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  return (
    <>
      <button
        type="button"
        className="w-full block text-left"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex flex-row items-center gap-4 justify-between">
          {text}
          {icon === true && (
            <BsPlus
              className={`fill-black dark:fill-white transition-all ${isCollapsed ? 'rotate-0' : 'rotate-45'}`}
            />
          )}
        </div>
      </button>
      <div
        className={`${isCollapsed ? 'hidden' : 'block'}`}
        aria-expanded={isCollapsed}
      >
        <div className="mt-4">
          {children}
        </div>
      </div>
    </>
  );
}
