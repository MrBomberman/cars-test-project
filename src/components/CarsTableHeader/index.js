function CarsTableHeader({ items, toggleSort, currentImage }) {
  return (
    <tr>
      <th onClick={toggleSort} className='stylePanel'>
        Марка и модель
        <img className="styleImg" src={currentImage} alt="arrowUp" />
      </th>
      {items.map((item) => (
        <th key={item}>{item}</th>
      ))}
    </tr>
  );
}

export default CarsTableHeader;
