function CarsTableHeader({item}) {
    return (
      <tr>
        <th>{item[0]}</th>
        <th>{item[1]}</th>
        <th>{item[2]}</th>
        <th>{item[3]}</th>
        <th>{item[4]}</th>
        <th>{item[5]}</th>
      </tr>
    );
}

export default CarsTableHeader;