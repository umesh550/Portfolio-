import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom right,#EEE,#E2EDEE, #DFECED,#D9FFF9, #D8FFF8)",
      }}
    >
      <section className="">
        <Header />
        <Hero />
      </section>
      <section className="h-lvh">
        <About />
      </section>
      <section className="h-lvh">Skills</section>
      <section className="h-lvh">Projects</section>
      <section className="">footer</section>
    </div>
  );
}

export default App;
