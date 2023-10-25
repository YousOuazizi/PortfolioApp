import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <ProjectSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
