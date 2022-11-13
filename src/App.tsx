import React, { useState } from 'react';
import './App.css';
import { Foto } from './components/Foto';
import { About } from './components/About';
import { Exp } from './components/Exp';
import { Contacts } from './components/Contacts';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { EnFoto } from './components/EnFoto';
import { EnAbout } from './components/EnAbout';
import { EnExp } from './components/EnExp';
import { EnContacts } from './components/EnContacts';
import { EnEducation } from './components/EnEducation';
import { EnSkills } from './components/EnSkills';

function App() {

  const [currentLanguage, setLanguage] = useState(true);

  return (
    <div className='flexmobi'>
      <div className='language'>
        <button onClick={() => setLanguage(prev => true)}>ua</button>
        <button onClick={() => setLanguage(prev => false)}>eng</button>
      </div>
      <div className='flexsize'>
      {currentLanguage ? <Foto /> : <EnFoto/>}
      {currentLanguage ? <About /> : <EnAbout/>}
      {currentLanguage ? <Exp /> : <EnExp/>}
      </div>
      <div className='flexsize2'>
      {currentLanguage ? <Contacts /> : <EnContacts/>}
      {currentLanguage ? <Education /> : <EnEducation/>}
      {currentLanguage ? <Skills /> : <EnSkills/>}
      </div>
    </div>

  );
}

export default App;
