import { HistoryItem } from "./HistoryItem";

// @ts-ignore
import useFetchGist from "./useFetchGist";

const timestamp = new Date().getTime();
const GIST_URL = `https://gist.githubusercontent.com/parkkennypark/783c7bad9d6b6ce310be6a067c8750ce/raw/menace_data.json?t=${timestamp}`;

function App() {
  const { data, loading, error } = useFetchGist(GIST_URL);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      className="mx-auto my-auto flex h-screen w-[28rem] flex-col items-center pt-28"
      // onContextMenu={(e) => e.preventDefault()}
    >
      {/* Title */}
      <p className="animate-expand mb-2 text-3xl font-medium">
        Is Robert Harris a Menace?
      </p>
      <p className="animate-hover mb-4 text-6xl font-extrabold">{data.title}</p>

      {/* Slider */}
      <div className="relative h-24 w-full">
        <img className="absolute bottom-6" src="/slider.png " />
        <div
          className="absolute top-0 w-16"
          style={{ left: `${data.percent}%` }}
        >
          <div className="absolute -left-8 flex w-full flex-col items-center">
            <p className="">{data.percent}%</p>
            <img className="h-auto w-6" src="/pointer.png" />
          </div>
        </div>
        <p className="absolute bottom-0">cutie </p>
        <p className="absolute bottom-0 right-0">menace </p>
      </div>

      {/* <p className="mt-6 font-normal text-gray-400">
        disagree? email us at menace@robert.com
      </p> */}

      {/* History */}
      <div className="mb-12 mt-12 w-full space-y-4 bg-gray-200 p-4">
        <p className="text-gray-500">history</p>
        {data.history.map((item: any) => (
          <HistoryItem
            date={item.date}
            description={item.description}
            change={item.change}
          />
        ))}
      </div>
      <a
        className="absolute bottom-0 left-0 p-4 text-gray-300"
        href="https://www.youtube.com/watch?v=-SjPVVeNdKY"
      >
        This site is funded in part by the Save America Super PAC. Click here to
        learn more.
      </a>
    </div>
  );
}

export default App;
