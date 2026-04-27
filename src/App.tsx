import { useState } from 'react';
import { SayacEkrani } from './screens/SayacEkrani';
import { NotlarEkrani } from './screens/NotlarEkrani';
import { GecmisEkrani } from './screens/GecmisEkrani';
import { AyarlarEkrani } from './screens/AyarlarEkrani';

export default function App() {
  const [screen, setScreen] = useState('counter');

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {screen === 'counter' && <SayacEkrani onNavigate={setScreen} />}
      {screen === 'notes' && <NotlarEkrani onNavigate={setScreen} />}
      {screen === 'history' && <GecmisEkrani onNavigate={setScreen} />}
      {screen === 'settings' && <AyarlarEkrani onNavigate={setScreen} />}
    </div>
  );
}
