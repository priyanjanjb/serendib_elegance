import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubPage from './components/subPage/subPage.tsx';
import foodImg from './assets/image/delicious-food-table.jpg'
import { subPageFoodText , subPageHillsText } from "./components/subPage/subText/subText.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/food" 
          element={
            <SubPage title="FOOD" image={foodImg} children={subPageFoodText()} />
          }
        />
        <Route path="/hills" 
          element={
            <SubPage title="HILLS" image={foodImg} children={subPageHillsText()} />
          }
        />
        <Route path="/culture" 
          element={
            <SubPage title="CULTURE" image={foodImg} />
          }
        />
        <Route path="/temple" 
          element={
            <SubPage title="Temple of Tooth" image={foodImg} />
          }
        />
        <Route path="/seegiriya" 
          element={
            <SubPage title="SIGIRIYA" image={foodImg} />
          }
        />
        <Route path="/beach" 
          element={
            <SubPage title="BEACH" image={foodImg} />
          }
        />

        <Route path="/waterfall" 
          element={
            <SubPage title="WATERFALL" image={foodImg} />
          }
        />
        <Route path="/tourist" 
          element={
            <SubPage title="TOURIST" image={foodImg} />
          }
        />
        <Route path="/ayuruweda" 
          element={
            <SubPage title="AYURUWEDA" image={foodImg} />
          }
        />
        


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
