import "./App.css";
import UserProfilePresenter from "./pattern/components/UserProfileContainer";

function App() {
  return (
    <div>
      <UserProfilePresenter userId={2} />
    </div>
  );
}

export default App;
