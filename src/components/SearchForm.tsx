/**
 *
 * @TODO добавить label для инпута
 */

const SearchForm = () => {
  return (
    <form method="submit" className="search-form">
      <button type="submit" className="search-form__button">
        <img src={'/images/searchIcon.svg'} alt="Кнопка поиска" />
      </button>
      <input
        type="text"
        name="searchName"
        id=""
        className="search-form__input"
        placeholder="Найдите ваш электромобиль"
      />
    </form>
  );
};

export default SearchForm;
