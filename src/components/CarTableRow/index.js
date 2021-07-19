function CarTableRow({ item }) {
  console.log(item.tariffs)
  return (
    <tr className="">
      <td>{item.mark} / {item.model}</td>
      
     
      
    </tr>
  );
}

export default CarTableRow