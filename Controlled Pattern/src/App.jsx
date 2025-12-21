import "./App.css";
import ControlledFeedbackForm from "./components/Controlled/ControlledFeedbackForm";
import FeedbackForm from "./components/messy/FeedbackForm";
import AutoFocus from "./components/state-ref/AutoFocus";
import Counter from "./components/state-ref/Counter";
import CounterWithRef from "./components/state-ref/CounterWithRef";
import UncontrolledFeedbackForm from "./components/Uncontrolled/UncontrolledFeedbackForm";
import UncontrolledFormNoRef from "./components/Uncontrolled/UncontrolledFormNoRef";

function App() {
  return <UncontrolledFormNoRef />;
}

export default App;
