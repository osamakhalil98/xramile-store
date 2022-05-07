import Gallery from "./components/Gallery/Gallery";
import Cart from "./components/Cart/Cart";
import store from "./redux/index";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
