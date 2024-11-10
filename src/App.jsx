import React, { useState } from 'react';
import Weather from './components/Weather';
import Search from './components/Search';
import { apiKey } from './config';

const App = () => {
  const [city, setCity] = useState(''); //kullanıcıdan alacağım şehrin ismi
  const [weatherData, setWeatherData] = useState(null); //veriyi saklamak için
  const [loading, setLoading] = useState(false); //verilerin yüklendiğini kontrol etmek için
  const [error, setError] = useState(''); //hata kontolü için

  const fetchWeather = (city) => {
    setLoading(true); //veri yüklenirken loading olsun
    setError(''); // önceki hataı sıfırla

    fetch(
      '`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`'
    )
      .then((res) => res.json()) //yanıtı jsona dönüştürelim
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data); //yanıt başarılı olursa state kayıt ediyoz
        } else {
          setError('City is not found');
        }
      })
      .catch((err) => {
        setError('An error occurred'); //api isteği başarısız olunca
        console.warn(err);
      })
      .finally(() => setLoading(false)); //istek tamamlanınca loadingi durdur
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Hava Durumu Uygulaması
      </h1>
      {loading && <p className="text-xl text-gray-600">Loading...</p>}
      {error && <p className="text-xl text-gray-600">{error}</p>}
    </div>
  );
};

export default App;
