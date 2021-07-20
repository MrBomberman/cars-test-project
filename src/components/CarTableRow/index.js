import {useState} from 'react';

function CarTableRow({ item, tariffs, activeChange }) {
    const [activeClass , setActiveClass] = useState(false)

    // const toggleClass = (e) => {
    //   if(e.target.className.includes('stylePanel')){
    //     setActiveClass(activeClass)
    //   }
      
     
    // };

  return (
    <>
    <tr className="styleRow">
      <td>{item.mark} / {item.model}</td>
      
      {tariffs.map((tariff) => {
        const itemTariff = item.tariffs[tariff];
        const key = tariff + item.mark + item.model
        if (!itemTariff) {
          return <td key={key}>-</td>;
        }
        return <td className={activeClass ? 'active' : 'stylePanel'} onClick={() => {
          activeChange(item.mark + ' ' + item.model + ' '+ itemTariff.year)

          
        }
        }
        key={key}>{itemTariff.year}</td>
      })}
      
    </tr>
    </>
  );
}

export default CarTableRow
// ['Стандарт'||'Комфорт'||'Эконом'||'Комфорт+'||'Бизнес'||'Минивен'||'Лайт']