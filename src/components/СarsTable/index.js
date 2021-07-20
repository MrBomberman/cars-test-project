import getCarsApi from "../../services/getCarsApi";
import { useState, useEffect } from "react";
import CarsTableHeader from "../CarsTableHeader";
import CarTableRow from "../CarTableRow";
import arrowUp from '../../assets/images/arrow-up.png';
import arrowDown from '../../assets/images/arrow-down.png';

const CarsTable = ({search, onChangeActive}) => {
  const [data, setData] = useState({cars: [], tariffs_list: []});
  const [sort, setSort] = useState(true);
  // const [activeCar, setActiveCar] = useState('')

    useEffect(() => {
      getCarsApi()
        .then(response => setData(response))
    },[]);

    const filteredItems = data.cars.slice(0,16).filter(item => item.mark.includes(search) || item.model.includes(search))
    // console.log('filteredItems: ',filteredItems)
    const sortedItems = filteredItems.sort(() => {return sort ? 1 : -1})
    // const sortedItemsUp = sortedItemsDown.sort(() => {return sort === 'asc' ? 'desc': -1})
    // console.log('sorted', sortedItemsUp)
    // console.log('sortedItems: ',sortedItems)
    // console.log(data)
    let currentImage = sort ? arrowUp : arrowDown

    return (
    <table className='mainTable'>
     <thead>
     <CarsTableHeader items={data.tariffs_list} sort={() => setSort(!sort)} currentImage={currentImage}/>
     </thead>
     <tbody>
     {sortedItems.map((item, index) => (
          <CarTableRow key={index} item={item} 
          tariffs={data.tariffs_list} 
          activeChange={onChangeActive}/>
        ))}
     </tbody>
    </table>
    )
}


// {data.map((item, i) => (<div key={i}>{item.mark}</div>))}
export default CarsTable;