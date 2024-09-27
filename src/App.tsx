import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
// import NewTransaction from "./components/Transactions/NewTransaction";
// import Transactions from "./components/Transactions/Transactions";
import { useAppSelector } from "./hooks";
// import { closeModal, openModal } from "./store/modal";
import Modal from "./components/Modal/Modal";
import Transactions from "./components/Transactions/Transactions";

function App() {
  // const dispatch = useAppDispatch();
  const { isOpen: modalIsOpen } = useAppSelector((state) => state.modal);

  return (
    <div className={"container"}>
      {modalIsOpen && <Modal />}
      <div className="header">
        <Header />
      </div>
      <div className="side-nav">
        <NavBar />
      </div>
      <div className="main-area">
        <Transactions/>
      </div>
    </div>
  );
}

export default App;
