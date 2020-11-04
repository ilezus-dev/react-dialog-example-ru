import { useState } from "react";
import PropTypes from "prop-types";
import localization from "../../localization";
import "./styles.css";

const Sender = ({ onAddMessage }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    onAddMessage(value);
    setValue("");
  };

  return (
    <form className="sender" onSubmit={onSubmit}>
      <input
        placeholder={localization.enterMessage}
        value={value}
        onChange={onChange}
        required
      />
      <button>{localization.send}</button>
    </form>
  );
};

Sender.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export default Sender;
