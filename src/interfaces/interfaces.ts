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
}
