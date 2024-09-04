import { useState } from 'react';
import { EMAIL_REGEX } from '../utils/emailRegex';
import {
  IFormValues,
  IInputValues,
  IValidationSettings,
} from '../interfaces/interfaces';

const useForm = (inputValues: IInputValues = {}): IFormValues => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const emailSettings: IValidationSettings = {
    email: {
      regExp: EMAIL_REGEX,
      validationError: 'Некорректный адрес электронной почты',
    },
  };

  const checkEmailValidation = (name: string, value: string) => {
    if (!emailSettings[name]) {
      return;
    }

    if (!emailSettings[name].regExp.test(value)) {
      setErrors({ ...errors, [name]: emailSettings[name].validationError });
      setIsValid(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    if (event.target instanceof HTMLFormElement) {
      setIsValid(event.target.checkValidity());
    } else if (event.target instanceof HTMLInputElement) {
      setIsValid(event.target.checkValidity());
    }
    checkEmailValidation(name, value);
  };

  return {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    setErrors,
    setIsValid,
  };
};

export default useForm;
