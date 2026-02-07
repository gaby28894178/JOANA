import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import MobileMenu from "./components/MobileMenu";
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
      <main style={{ padding: 20, marginTop: 70, minHeight: 'calc(100vh - 70px)' }}>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aroma" element={<Aroma />} />
          <Route path="/legumbres" element={<Legumbres />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Cart />
    </>
  );
}

export default App;
