import {useState} from 'react';
import arrowUp from '../../assets/images/arrow-up.png'

function CarsTableHeader({items, sort}) {
    return (
      <tr>
        <th onClick={sort} className={`${'stylePanel'} ${'arrowClass'}`}>Марка и модель<img src={arrowUp} alt='arrowUp'/></th>
        {items.map((item) => <th key={item}>{item}</th>)}
      </tr>
    );
}

export default CarsTableHeader;