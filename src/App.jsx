import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './components/Home/Home'
import Rooms from './components/Rooms/Rooms'
import Halls from './components/Halls/Halls'
import Kitchen from './components/Kitchen/Kitchen'
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home />}/>
            <Route path='rooms' element={<Rooms />}/>
            <Route path='conference-hall' element={<Halls />}/>
            <Route path='kitchen' element={<Kitchen />}/>
            <Route path='contacts' element={<Contacts />}/>
            <Route path='reservation' element={<Form />}/>
            <Route path='*' element={<h1>Not found</h1>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;