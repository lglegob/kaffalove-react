import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage'
import MenuCategoriesPage from './pages/MenuCategoriesPage';
import MenuCategoriePage from './pages/MenuCategoriePage';
import TheLegendPage from './pages/TheLegendPage';
import WhoWeArePage from './pages/WhoWeArePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Awesome React App</h1>
        <div id='page-body'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/menu" element={<MenuCategoriesPage />} />
            <Route path="/legend" element={<TheLegendPage />} />
            <Route path="/whoweare" element={<WhoWeArePage />} />
            <Route path="/menu/:menuId" element={<MenuCategoriePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
