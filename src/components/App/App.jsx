import { lazy, Suspense } from "react";
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from "react-router-dom";


const HomePage = lazy(()=> import('../../pages/HomePage/HomePage.jsx'));
const Catalog = lazy(()=> import('../../pages/Catalog/Catalog.jsx'));
const TruckPage = lazy(()=> import('../../pages/TruckPage/TruckPage.jsx'));

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<TruckPage />} />
        </Routes>
      </Suspense>
    </Layout>    
  );
}

export default App;