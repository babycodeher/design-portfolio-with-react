import React from 'react';
import NavTabs from '../NavTabs';

function Header() {
  return (
    <header className="flex flex-row bg-gray-800 text-white p-3">      
      <h1 className="basis-1/4 font-semibold text-4xl">'Wumi Afolabi</h1>
      <NavTabs />
    </header>
  );
}

export default Header;