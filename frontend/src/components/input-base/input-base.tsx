import { useState } from "react";
import styles from "./input-base.module.css";
import { Icon } from "../icon";

type Props = {
  type?: string;
  cross?: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  hint?: string;
  error?: boolean;
  value?: string;
  setInputBaseValue: (value: string) => void;
};

export default function InputBase({
  type = "text",
  label,
  placeholder,
  error,
  setInputBaseValue,
}: Props) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;

    setValue(v);
    setInputBaseValue(v);
  };

  const resetValue = () => {
    setValue("");
    setInputBaseValue("");
  };

  return (
    <div className={styles.wrapper}>
      <div>{label}</div>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
      {!!value.length && (
        <button
          className={styles.close}
          onClick={resetValue}
          onMouseDown={(e) => e.preventDefault()}
        >
          <Icon name="cross" size="s" />
        </button>
      )}

      {error && <div className="input-base__error">Заполните поле</div>}
    </div>
  );
}
