const BreadCrumb: React.FC = () => {
  return (
    <nav className="bread-crumb">
      <div>
        <span>Main Page</span>
        <img src={'/images/arrow.svg'} alt="Разделитель" />
        <span>Новости и анонсы</span>
        <hr />
      </div>
    </nav>
  );
};

export default BreadCrumb;
