import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const geo = [
    {id: 1, label: 'Ain'},
    {id: 2, label: 'Aisne'},
    {id: 3, label: 'Allier'},
    {id: 4, label: 'Alpes de Haute-Provence'},
    {id: 5, label: 'Hautes-Alpes'},
    {id: 6, label: 'Alpes-Maritimes'},
    {id: 7, label: 'Ardêche'},
    {id: 8, label: 'Ardennes'},
    {id: 9, label: 'Ariège'},
    {id: 10, label: 'Aube'},
    {id: 11, label: 'Aude'},
    {id: 12, label: 'Aveyron'},
    {id: 13, label: 'Bouches-du-Rhône'},
    {id: 14, label: 'Calvados'},
    {id: 15, label: 'Cantal'},
    {id: 16, label: 'Charente'},
    {id: 17, label: 'Charente-Maritime'},
    {id: 18, label: 'Cher'},
    {id: 19, label: 'Corrèze'},
    {id: 20, label: 'Corse'},
]

function Propose() {
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [selectedGeo, setSelectedGeo] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null); // Add state for selected date

    const handleOptionChangeGeo = (e) => {
        const selectedIds = Array.from(e.target.selectedOptions).map((option) => parseInt(option.value));
        setSelectedGeo(selectedIds);
    }

    const handleNumberOfPeopleChange = (e) => {
        setNumberOfPeople(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }; // Add function to handle date change

    return (
        <div className="flex">
            <div className='px-8 py-8 mt-8 ml-8 bg-slate-200 rounded-md'>
                <form>
                    <div className='flex-col'>

                        <select onChange={handleOptionChangeGeo}>
                            <option selected disabled>Choisissez une région</option>
                            {geo.map((geo) => (
                                <option key={geo.id} value={geo.id}>
                                {geo.label}
                            </option>
                            ))}
                        </select>

                        <DatePicker // Add DatePicker component
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Choisissez une date"
                        />

                    </div>
                    <div className='flex justify-between'>

                        <div className='flex'>

                            <div>
                                <text>
                                Nombre de personne : 
                                </text>
                            </div>

                            <div className='justify-end'>
                                <input className='rounded-md'
                                type="number"
                                min="1"
                                value={numberOfPeople}
                                onChange={handleNumberOfPeopleChange}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Propose;