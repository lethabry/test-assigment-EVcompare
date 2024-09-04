import InputElement from './InputElement';

const Registration: React.FC = () => {
  return (
    <section className="registration">
      <h2 className="registration__title">Регистрация</h2>
      <form method="submit" className="registration__form">
        <h3 className="registration__form-title">
          Для того, чтобы просматривать профиль, необходимо зарегистрироваться!
        </h3>
        <InputElement
          labelText={'Логин'}
          inputType={'text'}
          inputName={'userLogin'}
          inputId={'userLogin'}
          inputPlaceholder={'Придумайте логин'}
        />
        <InputElement
          labelText={'Адрес электронной почты'}
          inputType={'email'}
          inputName={'userEmail'}
          inputId={'userEmail'}
          inputPlaceholder={'Введите адрес электронной почты'}
        />
        <div className="registration__string">
          <InputElement
            labelText={'Пароль'}
            inputType={'password'}
            inputName={'userPassword'}
            inputId={'userPassword'}
            inputPlaceholder={'Придумайте пароль'}
          />
          <button className="registration__form-button" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
