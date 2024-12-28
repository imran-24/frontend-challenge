import "./App.css";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className='bg-neutral-100'>
        <div className='relative flex gap-4 max-w-screen-xl w-full mx-auto p-6'>
          <Sidebar />
          <Main />
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
