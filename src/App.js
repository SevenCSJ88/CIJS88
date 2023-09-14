import "./App.css";
import BigTitle from "./components/BigTiter";
import Box from "./components/Box";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div id="body">
      <Header />
      <div className="titel">
        <div className="titel-left">
          <BigTitle/>
        </div>
        <div className="Aside">ASIDE</div>
      </div>
      <div className="box">
        <Box/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default App;
