import { FormEvent } from 'react';
import useForm from '../hooks/useForm';
import InputElement from './InputElement';

const Registration: React.FC = () => {
  const {
    values: userState,
    handleChange,
    errors: errorState,
    isValid,
  } = useForm({ login: '', email: '', password: '' });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(userState));
  };

  return (
    <section className="registration">
      <h2 className="registration__title">Регистрация</h2>
      <form method="submit" className="registration__form" onSubmit={onSubmit}>
        <h3 className="registration__form-title">
          Для того, чтобы просматривать профиль, необходимо зарегистрироваться!
        </h3>
        <InputElement
          labelText={'Логин'}
          inputType={'text'}
          inputName={'login'}
          inputId={'userLogin'}
          inputPlaceholder={'Придумайте логин'}
          inputValue={userState.login}
          errorValue={errorState.login}
          handleChange={handleChange}
          minLength={8}
          maxLength={30}
        />
        <InputElement
          labelText={'Адрес электронной почты'}
          inputType={'email'}
          inputName={'email'}
          inputId={'userEmail'}
          inputPlaceholder={'Введите адрес электронной почты'}
          inputValue={userState.email}
          errorValue={errorState.email}
          handleChange={handleChange}
          minLength={8}
          maxLength={30}
        />
        <div className="registration__string">
          <InputElement
            labelText={'Пароль'}
            inputType={'password'}
            inputName={'password'}
            inputId={'userPassword'}
            inputPlaceholder={'Придумайте пароль'}
            inputValue={userState.password}
            errorValue={errorState.password}
            handleChange={handleChange}
            minLength={8}
            maxLength={30}
          />
          <button
            className="registration__form-button"
            type="submit"
            disabled={!isValid}
          >
            <span>Зарегистрироваться</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
