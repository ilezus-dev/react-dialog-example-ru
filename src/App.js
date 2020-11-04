import { useState } from "react";

import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import Header from "./components/Header";

import { AppContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";
import { setLanguage } from "./localization";

import data from "./data";

const App = () => {
  const [message, addMessage] = useState(null);
  const [theme, updateTheme] = useState(getTheme());
  const [, updateLanguage] = useState();

  const onAddMessage = (value) => {
    const id = Date.now();

    addMessage({
      id,
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: value,
      date: new Date().toISOString(),
      is: "my",
      status: "sended",
    });
  };

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
        <Dialog newMessage={message} messages={data} />
        <Sender onAddMessage={onAddMessage} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
