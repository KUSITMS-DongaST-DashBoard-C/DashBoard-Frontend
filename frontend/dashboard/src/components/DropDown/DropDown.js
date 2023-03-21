const MenuDropDown = ({ value, setMenuIdentify, setIsOpen, isOpen }) => {
  const ValueClick = () => {
    setMenuIdentify(value);
    setIsOpen(!isOpen);
  };
  return <li onClick={ValueClick}>{value}</li>;
};

export default MenuDropDown;
