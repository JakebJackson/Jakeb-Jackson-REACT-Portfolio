import Header from "./components/Header";

import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div className="vh-100 bg-l-blue">
      <Header/>
      <main>
        <Page currentPage={currentPage}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;