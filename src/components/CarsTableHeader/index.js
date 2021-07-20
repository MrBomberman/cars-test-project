
function CarsTableHeader({items, sort, currentImage}) {
  console.log(sort)
    return (
      <tr>
        <th onClick={sort} className={`${'stylePanel'} ${'styleFilter'}`}>
          Марка и модель<img className='styleImg' src={currentImage} alt='arrowUp'/></th>
        {items.map((item) => <th key={item}>{item}</th>)}
      </tr>
    );
}

export default CarsTableHeader;