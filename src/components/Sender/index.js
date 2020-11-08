import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Sender = ({ onAddMessage }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    onAddMessage({
      id: Date.now(),
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: value,
      date: new Date().toISOString(),
      is: "my",
      status: "sended",
    });
    setValue("");
  };

  return (
    <form className="sender" onSubmit={onSubmit}>
      <input
        placeholder="Введите сообщение"
        value={value}
        onChange={onChange}
        required
      />
      <button>Отправить</button>
    </form>
  );
};

Sender.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export default Sender;
