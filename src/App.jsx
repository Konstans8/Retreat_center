import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './components/Home/Home'
import Rooms from './components/Rooms/Rooms'
import Halls from './components/Halls/Halls'
import Kitchen from './components/Kitchen/Kitchen'
import Plan from './components/Plan/Plan'
import Contacts from './components/Contacts/Contacts';
import Galeria from './components/Galeria/Galeria';
import Form from './components/Form/Form';
import MessageSuccess from './components/MessageSuccess/MessageSuccess';
import NotFound from './components/NotFound/NotFound';
import './App.css';





function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='rooms' element={<Rooms />}/>
            <Route path='conference-hall' element={<Halls />}/>
            <Route path='kitchen' element={<Kitchen />}/>
            <Route path='plan' element={<Plan/>}/>
            <Route path='contacts' element={<Contacts />}/>
            <Route path='galeria' element={<Galeria />}/>
            <Route path='reservation' element={<Form />}/>
            <Route path='success' element={<MessageSuccess />}/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;