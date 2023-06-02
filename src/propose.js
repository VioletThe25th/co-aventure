import { render } from '@testing-library/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const activite = [
  { id: 1, label: 'Atelier créatif', price: 35 },
  { id: 2, label: 'Sortie snorkeling', price: 25 },
  { id: 3, label: 'Visite de Sète', price: 25 },
  { id: 4, label: 'Baptème de plongée sous-marine', price: 80 },
  { id: 5, label: 'Découverte du canyoning au Canigou', price: 45 },
  { id: 6, label: 'Balade en Kayak avec les flamants rose', price: 25 },
  { id: 7, label: 'La Camargue en VTT électrique', price: 69 },
  { id: 8, label: 'Balade en kayak avec les flamants rose au coucher du soleil', price: 25 },
  { id: 9, label: "Balade en kayak : les falaises du cap d'Agde", price: 35 },
  { id: 10, label: 'Canyoning dans les gorges du Llech', price: 65 },
  { id: 11, label: 'Balade en voilier & initiation à la navigation', price: 90 },
];

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
  const [budget, setBudget] = useState(0); // Add state for budget
  const [submit, setSubmit] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Do something with the form data, such as sending it to a server
    setSubmit(true);
  }

  return (
    <div className="flex">
      <div className='px-8 py-8 mt-8 ml-8 bg-slate-200 rounded-md'>
        <form onSubmit={handleSubmit}>
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

            <div className=''>
              <div className='flex flex-row justify-between'>
                <div className='pr-8'>
                  <text>
                    Nombre de personne : 
                  </text>
                </div>

                <div className=''>
                  <input className='rounded-md'
                    type="number"
                    min="1"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                  />
                </div>
              </div>
                            
              <div className='flex flex-row justify-between'>
                <div className='pr-8'>
                  <text>
                    Budget: 
                  </text>
                </div>
                <input // Add input field for budget
                  type="number"
                  min="0"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Budget"
                />
              </div>
            </div>
          </div>
          <button onClick={handleSubmit}> Afficher les activités potentielles</button>
          {submit &&
            <pre>{JSON.stringify(activite, null, 2)}</pre>
          }

        </form>
      </div>
    </div>
  );
}

export default Propose;