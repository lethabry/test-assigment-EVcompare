const Pagination: React.FC = () => {
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item  pagination__item_active">
          <span>1</span>
        </li>
        <li className="pagination__item">
          <span>2</span>
        </li>
        <li className="pagination__item">
          <span>3</span>
        </li>
        <li className="pagination__item">
          <span>4</span>
        </li>
        <li className="pagination__item">
          <span>...</span>
        </li>
        <li className="pagination__item">
          <span>10</span>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
