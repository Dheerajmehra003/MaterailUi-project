import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {useMode, ColorModeContext} from './theme'
import { ThemeProvider} from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import Topbar from  './scenes/global/Topbar'
import Drawer from './scenes/global/Drawer'
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/Form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar';

const App = () => {
  const[theme, colorMode] = useMode();

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <div className='app'>
      <div className='sidebar'>
      <Drawer  />
      </div>
      <main className='content'>
        <Topbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/invoices' element={<Invoices />} />
          <Route path='/bar' element={<Bar />} />
          <Route path='/form' element={<Form />} />
          <Route path='/line' element={<Line />} />
          <Route path='/pie' element={<Pie />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/geography' element={<Geography />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
        </main>
     </div>
    </ThemeProvider>
     </ColorModeContext.Provider>
    </>
  )
}

export default App