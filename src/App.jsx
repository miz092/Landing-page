import { Article, Brand, CTA, Navbar } from "./components";
import { Footer, Blog, Future, Header, WhatIs, Features } from "./containers";
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
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
