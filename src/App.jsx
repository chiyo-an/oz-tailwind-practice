//import "./App.css";

import Content from "./components/Content";
import Header from "./components/Header";
import { contents } from "./assets/data/data";

function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-wrap justify-center gap-8 p-8 mx-auto">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
