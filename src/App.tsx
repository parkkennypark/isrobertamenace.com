import { HistoryItem } from "./HistoryItem";

import useFetchGist from "./useFetchGist";

import sliderImg from "./assets/slider.png";
import pointerImg from "./assets/pointer.png";

const timestamp = new Date().getTime();
const GIST_URL = `https://gist.githubusercontent.com/parkkennypark/783c7bad9d6b6ce310be6a067c8750ce/raw/menace_data.json?t=${timestamp}`;

function App() {
  const { data, loading, error } = useFetchGist(GIST_URL);

  // 1. Keep the empty div for loading (or a spinner)
  if (loading)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  // 2. Safer Error handling - ensure we aren't rendering an object
  if (error)
    return (
      <div className="p-10 text-red-500">
        Error: {typeof error === "string" ? error : "Failed to fetch"}
      </div>
    );

  // 3. Final safety check: If data is null/undefined, don't try to render the rest
  if (!data) return null;

  return (
    <div className="mx-auto my-auto flex h-full w-full max-w-[28rem] flex-col items-center px-4 pt-28">
      {/* Title */}
      <p className="animate-expand mb-2 text-lg font-medium md:text-3xl">
        Is Robert Harris a Menace?
      </p>
      <p className="animate-hover mb-4 text-4xl font-extrabold md:text-6xl">
        {data.title}
      </p>

      {/* Slider */}
      <div className="relative h-24 w-full">
        <img className="absolute bottom-6" src={sliderImg} alt="slider" />
        <div
          className="absolute top-0 w-16 transition-all duration-700"
          style={{ left: `${data.percent || 0}%` }}
        >
          <div className="absolute -left-8 flex w-full flex-col items-center">
            <p className="font-bold">{data.percent}%</p>
            <img className="h-auto w-6" src={pointerImg} alt="pointer" />
          </div>
        </div>
        <p className="absolute bottom-0 text-sm">cutie</p>
        <p className="absolute bottom-0 right-0 text-sm">menace</p>
      </div>

      {/* History - Safely handle the map */}
      <div className="mb-12 mt-12 w-full space-y-4 rounded-lg bg-gray-200 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
          history
        </p>
        {(data?.history || []).map((item: any, index: number) => (
          <HistoryItem
            key={index}
            date={item.date}
            description={item.description}
            change={item.change}
          />
        ))}
      </div>

      <a
        className="absolute bottom-0 left-0 p-4 text-xs text-gray-300"
        href="https://www.youtube.com/watch?v=-SjPVVeNdKY"
      >
        This site is funded in part by the Save America Super PAC. Click here to
        learn more.
      </a>
    </div>
  );
}

export default App;
