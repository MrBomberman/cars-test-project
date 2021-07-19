function CarTableRow({ item }) {
  console.log(item.tariffs)
  return (
    <tr className="">
      <td>{item.mark}</td>
      <td>{item.model}</td>
     
      
    </tr>
  );
}

export default CarTableRow