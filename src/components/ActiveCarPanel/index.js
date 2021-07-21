function ActiveCarPanel({ activeCar }) {
  if (activeCar === null) {
    return <div className="panel">Автомобиль не выбран</div>;
  } else {
    return (
      <div className="panel">Выбран автомобиль {activeCar} года выпуска</div>
    );
  }
}

export default ActiveCarPanel;
