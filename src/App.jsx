import Header from "./components/Header";

import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div className="">
      <Header/>
      <main className="d-flex flex-column h-100 bg-onyx">
        <Page currentPage={currentPage}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;