import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import projects from "./components/Project";
import contact from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom right,#EEE,#E2EDEE, #DFECED,#D9FFF9, #D8FFF8)",
      }}
      className=""
    >
      <section className="h-lvh">
        <Header />
        <Hero />
      </section>
      <section className="min-h-lvh">
        <About />
      </section>
      <section className="h-lvh">
        <Skills />
      </section>
      <section className="h-lvh">
        <Project />
      </section>
      <section className="">
        <contact />
      </section>
    </div>
  );
}

export default App;
