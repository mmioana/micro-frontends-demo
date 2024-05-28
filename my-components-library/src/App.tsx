import React, { ChangeEvent, useState } from 'react';

const availableThemes = ['main', 'stone', 'mauve'];

function App() {
  const [theme, setTheme] = useState<string>(availableThemes[0]);

  const handleThemeSelector = (selectedTheme: string) => {
    setTheme(selectedTheme);
  }
  return (
    <main className={`theme-${theme}`}>
      <div className='py-12'>
        <label htmlFor="theme" className="block mb-2 text-sm text-gray-900 font-bold">Select a theme</label>
        <select 
          id="theme" 
          onChange={(e: ChangeEvent) => handleThemeSelector((e.target as any).value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {availableThemes.map(availableTheme =>
            <option key={availableTheme}>{availableTheme}</option>
          )}
        </select>
      </div>
      <h1 className="text-3xl text-primary font-bold">
        Hello world!
      </h1>
    </main>
  );
}

export default App;
