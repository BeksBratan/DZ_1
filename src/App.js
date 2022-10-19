import "./App.css";
import CardsWrapper from "./components/CardWrapper/CardWrapper";

function App() {
    return (
        <div className="App">
            <CardsWrapper cardsNumber="10" />
            <button onClick={() => window.location.reload()}>Reload Cards</button>

        </div>
    );
}

export default App;