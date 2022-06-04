import './App.css';
import  Header  from './components/Header'
import MyCart from './components/MyCart'
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}>
           Home      
          </Route>
          <Route path="/mycart" element={<MyCart/>}>
           Cart     
          </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
