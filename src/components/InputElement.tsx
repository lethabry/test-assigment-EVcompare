import { IInput } from '../interfaces/interfaces';

const InputElement: React.FC<IInput> = ({
  inputType,
  inputName,
  labelText,
  inputId,
  inputPlaceholder,
  handleChange,
  inputValue,
  errorValue,
  minLength,
  maxLength,
}) => {
  const getErrorClass = (errorValue: string) =>
    `input-element__input ${errorValue ? 'input-element__input_error' : ''}`;

  return (
    <div className="input-element">
      <label className="input-element__label" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        value={inputValue || ''}
        onChange={handleChange}
        type={inputType}
        name={inputName}
        id={inputId}
        className={getErrorClass(errorValue)}
        placeholder={inputPlaceholder}
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      <span className="input-element__error">{errorValue}</span>
    </div>
  );
};

export default InputElement;
