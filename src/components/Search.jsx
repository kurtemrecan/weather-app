import React from 'react';

export default function Search({ city, setCity, fetcWeather }) {
  const InputHandleChange = (e) => {
    setCity(e.target.value); // cityi güncelle
  };

  const handleSubmit = (e) => {
    e.prevent.default(); //formun sayfayı yenilemesini engelledik
    if (city) {
      fetcWeather(city); //fetchweateher fonk. cagir
      setCity(''); //girdiyi sıfırla
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={InputHandleChange}
        placeholder="Enter city name"
        className="px-4 py-2 border rounded-md shadow-md"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Learn the weather
      </button>
    </form>
  );
}
