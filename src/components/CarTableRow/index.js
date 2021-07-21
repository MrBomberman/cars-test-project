function CarTableRow({ item, tariffs, activeChange, activeCar }) {
  return (
    <>
      <tr className="styleRow">
        <td>
          {item.mark} / {item.model}
        </td>

        {tariffs.map((tariff) => {
          const itemTariff = item.tariffs[tariff];
          const key = tariff + item.mark + item.model;
          if (!itemTariff) {
            return <td key={key}>-</td>;
          }
          const currentValue =
            item.mark + ' ' + item.model + ' ' + itemTariff.year;
          return (
            <td
              className={`stylePanel ${
                activeCar === currentValue ? 'active' : ''
              }`}
              onClick={() => {
                activeChange(currentValue);
              }}
              key={key}
            >
              {itemTariff.year}
            </td>
          );
        })}
      </tr>
    </>
  );
}

export default CarTableRow;
