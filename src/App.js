import { useState } from "react";

import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import Header from "./components/Header";

import { AppContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";
import { setLanguage } from "./localization";

const App = () => {
  const [message, addMessage] = useState(null);
  const [theme, updateTheme] = useState(getTheme());
  const [, updateLanguage] = useState();

  const toggleTheme = (theme) => {
    setTheme(theme);
    updateTheme(theme);
  };

  const toggleLanguage = (language) => {
    setLanguage(language);
    updateLanguage(language);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        toggleLanguage,
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
