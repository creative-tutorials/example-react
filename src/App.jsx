import "./App.css";
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Content } from "./components/content";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <Banner />
      <Content />
    </main>
  );
}

export default App;
