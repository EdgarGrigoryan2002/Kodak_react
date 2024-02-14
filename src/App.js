
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import Section from './components/section/Section';
import "bootstrap/dist/css/bootstrap.min.css"
import Badge from './components/badge/Badge';
import Notebook from './components/notebook/Notebook';
import Footer from './components/footer/Footer';
import BusinessCard from './components/business_card/BusinessCard';
import Calendar from './components/calendar/Calendar';
import Advertisement from './components/advertisement/Advertisement';

function App() {

  
  return (
    <div> 
      
    <Header />
    <Routes>
      <Route path='/shop' element={<Shop />} />
       <Route path='/' element={<Section />} />
      <Route path='/badge' element={<Badge />} />
      <Route path='/notebook' element={<Notebook />} />
      <Route path='/Business_Card' element={<BusinessCard />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/advertisement' element={<Advertisement />} />
    </Routes>
    <Footer />


    </div>
  );
}

export default App;
