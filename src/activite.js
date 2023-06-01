import React, { useState, useEffect } from 'react';

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

function Activite(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedGeo, setSelectedGeo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
    console.log("Activite", newTotalPrice);
    props.onTotalPriceChange(newTotalPrice);
  }, [props.selectedOptions, props.numberOfPeople]);

  const handleOptionChange = (e) => {
    const selectedIds = Array.from(e.target.selectedOptions).map((option) => parseInt(option.value));
    setSelectedOptions(selectedIds);
  };

  const handleOptionChangeGeo = (e) => {
    const selectedIds = Array.from(e.target.selectedOptions).map((option) => parseInt(option.value));
    setSelectedGeo(selectedIds);
  }

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(e.target.value);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedOptions.forEach((optionId) => {
      const optionActivite = activite.find((opt) => opt.id === optionId);
      if (optionActivite) {
        totalPrice += optionActivite.price;
      }
    });
    return totalPrice * numberOfPeople;
  };

  const calculateReducPrice = (totalPrice) => {
    if (numberOfPeople <= 4) return ((totalPrice * 0.90));
    if (numberOfPeople > 4 && numberOfPeople < 8) return ((totalPrice * 0.75));
    if (numberOfPeople >= 8) return ((totalPrice * 0.50));
  }

  return (
    <div className="flex">
      <div className='px-8 py-8 mt-8 ml-8 bg-slate-200 rounded-md'>
        <form>
            <div className='flex-col'>
                <select onChange={handleOptionChange}>
                <option selected disabled>Choisissez une activité</option>
                {activite.map((activite) => (
                <option key={activite.id} value={activite.id}>
                    {activite.label} - {activite.price}€
                </option>
                ))}
            </select>

            <select onChange={handleOptionChangeGeo}>
                <option selected disabled>Choisissez une région</option>
                {geo.map((geo) => (
                    <option key={geo.id} value={geo.id}>
                    {geo.label}
                </option>
                ))}
            </select>
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
        <div className='flex justify-between'>
          <div>
            <text>
              Prix total de l'activité : 
            </text>
          </div>
          <div className='rounded-md bg-white px-2'>
            <div className='text-orange-500 text-2xl'>
              de {calculateReducPrice(calculateTotalPrice())}€ à {calculateTotalPrice()}€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activite;