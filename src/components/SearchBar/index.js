import { useState } from "react";


function SearchBar({onChange}){
    const [input, setInput] = useState(''); // '' is the initial state value
    
     return (
        <div className='searchBar'><input value={input} onChange={(e) => {
            const {value} = e.target;
            setInput(value);
            if (value === ''){
                onChange(value); 
            }
        }}
        placeholder='Поиск'/><button onClick={() => onChange(input)}>Найти</button></div>
    )
}

export default SearchBar;