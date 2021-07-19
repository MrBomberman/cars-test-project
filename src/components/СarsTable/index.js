import getCarsApi from "../../services/getCarsApi";
import { useState, useEffect } from "react";
import CarsTableHeader from "../CarsTableHeader";
import CarTableRow from "../CarTableRow";

const CarsTable = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      getCarsApi()
        .then(data => setItems(data))
    },[]);

    
    console.log(items)
    return (
    <table>
     <thead>
     <CarsTableHeader item={items.tariffs_list}/>
     </thead>
     <tbody>
     {items.cars.map((item, index) => (
          <CarTableRow key={index} item={item} />
        ))}
     </tbody>
    </table>
    )
}


// {items.map((item, i) => (<div key={i}>{item.mark}</div>))}
export default CarsTable;