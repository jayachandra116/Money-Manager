import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import NewTransaction from "./components/Transactions/NewTransaction";
import Transactions from "./components/Transactions/Transactions";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={"container"}>
      <div className="header">
        <Header onCreateNew={handleOpenModal}/>
      </div>
      <div className="side-nav">
        <NavBar />
      </div>
      <div className="main-area">
        {isModalOpen && <NewTransaction onClose={handleCloseModal} />}
        <Transactions onCreateNew={handleOpenModal} />
      </div>
    </div>
  );
}

export default App;
