import Game from "./components/Game";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <div className="app-background app-container">
        <Game />
      </div>
    </Layout>
  );
}

export default App;
