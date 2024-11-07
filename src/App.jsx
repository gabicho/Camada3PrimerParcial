import { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
function App() {
  const [isSelected, setIsSelected] = useState({
    artista: null,
    status: false,
  });
  return (
    <>
     <Form/>
    </>
  );
}

export default App;
