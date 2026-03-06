import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Aroma from "./pages/Aroma";
import Legumbres from "./pages/Legumbres";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <main style={{ padding: '20px 20px 0 20px', marginTop: 70, minHeight: 'calc(85vh - 70px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/aroma" element={<Aroma />} />
            <Route path="/legumbres" element={<Legumbres />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <Cart />
    </>
  );
}

export default App;
