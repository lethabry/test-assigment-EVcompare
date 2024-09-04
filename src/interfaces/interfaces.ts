export interface INewsItem {
  id: number;
  imgName: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface IInput {
  inputType: string;
  inputName: string;
  labelText: string;
  inputId: string;
  inputPlaceholder: string;
  inputValue: string;
  errorValue: string;
  minLength: number;
  maxLength: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IInputValues {
  [key: string]: string;
}

export interface IValidationSettings {
  [key: string]: {
    regExp: RegExp;
    validationError: string;
  };
}
export interface IFormValues {
  values: IInputValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setValues: React.Dispatch<React.SetStateAction<IInputValues>>;
  errors: { [key: string]: string };
  isValid: boolean;
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}
