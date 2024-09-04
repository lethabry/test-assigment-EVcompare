import { IInput } from '../interfaces/interfaces';

const InputElement: React.FC<IInput> = ({
  inputType,
  inputName,
  labelText,
  inputId,
  inputPlaceholder,
}) => {
  return (
    <div className="input-element">
      <label className="input-element__label" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        className="input-element__input"
        placeholder={inputPlaceholder}
      />
      <span className="input-element__error">sadasdsad</span>
    </div>
  );
};

export default InputElement;
