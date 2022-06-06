import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './component/Layout'; 
import Home from './component/Home';
import Projects from './component/Home/Projects';
import Logo from './component/Home/Logo';
import About from './component/About';
import Contact from './component/Contact';
import Work from './component/Work';

function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Layout/>}> 
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='work' element={<Work/>}/>
        </Route>
      </Routes>
    </>
   
  );
}

export default App;
