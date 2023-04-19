import "./App.css";
import Header from "./UI/Header";
import CartProvider from "./source/CartProvider";
import ShoeForm from "./components/ShoeForm";
import AllShoes from "./components/AllShoes";

function App() {
  return (
    <CartProvider>
      <Header />
      <ShoeForm />
      <AllShoes/>
    </CartProvider>
  );
}

export default App;
