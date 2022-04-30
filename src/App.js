import { useEffect, useState } from "react";
import ColorGroup from "./components/ColorGroup";
import { ColorsProvider } from "./components/ColorsContext";

const colors = ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];
const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function App() {
  const [currentBg, setCurrentBg] = useState('bg-neutral-900');
  const [currentText, setCurrentText] = useState('text-slate-50');

  useEffect(() => {
    console.log(currentText);
  }, [currentText])


  return (
    <main className="flex flex-wrap justify-center p-5 gap-10">
      <h1 className="text-3xl font-semibold w-full text-center">Tailwind CSS Colors</h1>
      <ColorsProvider value={{ setCurrentBg, setCurrentText }}>
        <section className="flex flex-col items-end">
          {
            colors.map((color, i) => {
              return <ColorGroup color={color} numbers={numbers} first={i === 0} last={i === (colors.length - 1)} key={color} />
            })
          }
        </section>
      </ColorsProvider>

      <section>
        <p>Left click to copy text color</p>
        <p>Right click to copy background color</p>
        <div className={`${currentBg} ${currentText} font-semibold text-lg p-5 rounded-xl outline-dashed outline-2 outline-slate-500 mx-auto w-fit h-fit my-5`}>
          <span>Sample text</span>
        </div>
        <p>Text: {currentText}</p>
        <p>Background: {currentBg}</p>
      </section>

    </main>

  );
}

export default App;
