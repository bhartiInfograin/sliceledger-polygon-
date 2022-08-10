import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/main.scss';
import Landing from './pages/landing/Main';
import EnterPrise from './pages/enterprise/Main';
import Network from './pages/network/Network';
import Research from './pages/research/Research';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './common/Footer';


function App() {
  
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/enterprise" element={<EnterPrise/>} />
          <Route path="/network" element={<Network/>} />
          <Route path="/research" element={<Research/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


// basename='/sliceledger/' 