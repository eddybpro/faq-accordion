import FAQ from "./FAQ";
import { data } from "./data";

import "./App.css";

function App() {
  return (
    <main>
      <div className="ImgContainer"></div>
      <div className="FAQContainer">
        <h1 className="FAQContainer-Title">faq</h1>
        <ul className="FAQContainer-List">
          {data.map((el, i) => (
            <FAQ key={i} question={el.question} answer={el.answer} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
