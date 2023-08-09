import Header from "./components/Header";
import Hero from "./components/Hero";
import Groups from "./components/Groups";
import Search from "./components/Search";
import Events from "./components/Events";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

import "./scss/app.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <Events />
      <Categories />
      <Groups />
      <Footer />
    </>
  );
}

export default App;
