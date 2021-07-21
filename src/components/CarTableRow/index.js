

function CarTableRow({ item, tariffs, activeChange }) {

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
          return (
            <td
              className='stylePanel'
              onClick={() => {
                activeChange(
                  item.mark + ' ' + item.model + ' ' + itemTariff.year,
                );
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
