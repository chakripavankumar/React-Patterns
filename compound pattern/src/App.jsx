import Modal from "./components/messy/Model";

function App() {
  return (
    <Modal title="Confirmation" body="Are you sure you want to proceed?" primaryAction={<button>Yes</button>} secondaryAction={<button>No</button>} />

  )
}

export default App;
