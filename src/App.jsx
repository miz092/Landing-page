import { Brand, CTA, Navbar } from "./components";
import { Footer, Future, Header, WhatIs, Features } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatIs />
      <Features />
      <Future />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
