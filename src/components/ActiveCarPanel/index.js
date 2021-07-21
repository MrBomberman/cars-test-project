function ActiveCarPanel({ activeCar }) {
    const text = activeCar === null ? 'Автомобиль не выбран' : `Выбран автомобиль ${activeCar} года выпуска`;
    return (
      <div className="panel">{text}</div>
    );
  
}

export default ActiveCarPanel;
