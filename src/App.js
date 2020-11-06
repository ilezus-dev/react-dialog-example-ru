import { useState } from "react";

import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import Header from "./components/Header";

import { AppContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";

const App = () => {
  const [message, addMessage] = useState(null);
  const [theme, updateTheme] = useState(getTheme());

  const toggleTheme = (theme) => {
    setTheme(theme);
    updateTheme(theme);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        <Header />
        <Dialog newMessage={message} />
        <Sender onAddMessage={addMessage} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
