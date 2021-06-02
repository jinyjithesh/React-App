import React ,{useState}from 'react';
import Header from './Components/Layout/Header';
import MainSection from './Components/Layout/MainSection';
import Modal from './Components/UI/Modal';


function App() {
  const [modalIsShown,setModalIsShown]=useState(false);
  const shownModalHandler=()=>{
    setModalIsShown(true);
  };
  return (
    <div >
      <Header/>

      <MainSection onshownModal={shownModalHandler} />
    { modalIsShown && <Modal />}
    </div>
  );
}

export default App;
