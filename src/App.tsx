import Game from "./components/Game";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <div className="bg-linear-to-b from-[#474747] to-[#1D1D1D] h-full md:h-[calc(100vh-32px)] flex items-end justify-center py-32">
        <Game />
      </div>
    </Layout>
  );
}

export default App;
