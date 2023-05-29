import React from 'react';
import weather from '../assets/tips/weather/weather.jpg';
import halong from '../assets/tips/weather/halong.jpg';
import hanoi from '../assets/tips/weather/hanoi.jpg';
import sapa from '../assets/tips/weather/sapa.jpg';
import hue from '../assets/tips/weather/hue.jpg';
import hoian from '../assets/tips/weather/hoian.jpg';
import nhatrang from '../assets/tips/weather/nhatrang.jpg';
import dalat from '../assets/tips/weather/dalat.jpg';
import mekong from '../assets/tips/weather/mekong.jpg';
import phuquoc from '../assets/tips/weather/phquoc.jpg';
import { ImageHeader, TipsHeader } from '../components';

const WeatherTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="tips-container">
          <ImageHeader img={weather} />
          <article className="article-container">
            <TipsHeader
              title="Vietnam’s unique geography creates a range of weather patterns, with both tropical and temperate zones."
              author="Nam Nguyen"
              date="28 November 2021"
            />

            <h3 className="notice text-lg mt-4">Northern Vietnam</h3>

            {/* Weather in Halong Bay */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Halong Bay</h3>
              <img src={halong} alt="halong bay" />

              <p>
                <b>December - March: </b>cool to cold, misty, cloudy <br />
                <b>April - June: </b>warm to hot, clear skies, sunny <br />
                <b>June - August: </b>stormy, hot, humid
                <br />
                <b>September - November: </b>mix of sun and clouds, warm to cool{' '}
                <br />
              </p>

              <p>
                If you’re coming to Halong Bay, try to visit from April to June
                or September to November. You’ll have a better chance of
                enjoying sunny skies and pleasant temperatures. Other times of
                year, downpour or heavy mist is common, and tropical storms can
                sometimes cause cruise cancellations.{' '}
              </p>
              <p>
                However, if you’re on the water during this time you can
                experience a more mystical side of Halong Bay, with its famous
                karsts shrouded in mist. Temperatures in January can be frigid,
                so be sure to bring warm layers.
              </p>
            </div>

            {/* Weather in Hanoi */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Hanoi</h3>
              <img src={hanoi} alt="Weather in Hanoi" />
              <p>
                <b>December - March: </b>cool to cold, misty, cloudy <br />
                <b>April - June: </b>warm to hot, clear skies, sunny <br />
                <b>June - August: </b>hot, humid, rainy
                <br />
                <b>September - November: </b>cool, clear skies, sunny <br />
              </p>
              <p>
                The best time to visit Hanoi is usually from April to June or
                from September to December. From April the days are normally
                hot, occasionally above 30 degrees with clear skies. September
                to November sees cooler temperatures of around 25 degrees and
                sunny skies -- perfect for exploring the capital.
              </p>
              <p>
                If you’re coming to Hanoi in June, expect soaring temperatures
                with humidity highs of 40 degrees, and the rainy season is full
                swing (June to August). December is cool, misty and atmospheric,
                however from late December until March temperatures are
                surprisingly cold with lows of 10 degrees. You’ll want to bundle
                up.
              </p>
            </div>
            {/* Weather in Sapa */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Sapa</h3>
              <img src={sapa} alt="Weather in Sapa" />
              <p>
                <b>December - March: </b>chilly, misty, cloudy <br />
                <b>April - June: </b>warm, clear skies, sunny
                <br />
                <b>June - August: </b>stormy, warm, humid
                <br />
                <b>September - November: </b>cool, clear skies, dry <br />
              </p>
              <p>
                Vietnam’s Northern destinations such as Sapa have a much cooler
                climate than the rest of the country, particularly from late
                December until March. Sapa sees the occasional snowfall in
                January, so be prepared. Hotels in the area are equipped with
                heated blankets and local spas offer herbal baths for you to
                soak in and warm up.
              </p>
              <p>
                Sapa is near-perfect in late April, as flowers bloom and skies
                are clear. Early October is also lovely, as its impressive
                tiered rice paddies turn golden just before harvest.
              </p>
            </div>

            <h3 className="notice text-lg mt-4">Central Vietnam</h3>

            {/* Weather in Hue */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Hue</h3>
              <img src={hue} alt="Weather in Hue" />
              <p>
                <b>September-February: </b> cool to cold, rainy, cloudy <br />
                <b>March-August: </b>warm to hot, sunny, clear skies
              </p>
              <p>
                Huế, home of Vietnam’s last reigning dynasty, has a late rainy
                season, with storms and days that are wet and cool from
                September to February. Look out for occasional flooding from
                September to November. In the early months of the year,
                temperatures go down to 15 degrees, and January often sees a bit
                of mist. The rest of the year is dry, and in July you’ll have
                perfect beach weather, with highs of 35 degrees.
              </p>
            </div>

            {/* Weather in Hoi An */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Hoi An</h3>
              <img src={hoian} alt="Weather in Hoi An" />
              <p>
                <b>September - January: </b> rainy, cool, cloudy <br />
                <b>February - August: </b>warm to hot, sunny, clear skies
              </p>
              <p>
                Hội An is one of the country’s picture-perfect places, but
                starting in September, tropical storms hit Central Vietnam hard.
                March is an excellent time to see Hội An when the fields,
                gardens and streets are awash in bright blossoms and soothing
                greens. From May to August, the town can be hot, and you’ll want
                to head to the beach to cool off.
              </p>
              <p>
                {' '}
                In the late months of the year, from September to November, Hội
                An sees a lot of rain and even a few small floods. The
                temperatures begin to dip and reach their coldest point in
                January, warming up just before the Vietnamese new year.
              </p>
            </div>

            {/* Weather in Nha Trang */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Nha Trang</h3>
              <img src={nhatrang} alt="Weather in Nha Trang" />
              <p>
                <b>September - January: </b> rainy, cool, cloudy <br />
                <b>February - August: </b>warm to hot, sunny, clear skies
              </p>
              <p>
                Hội An is one of the country’s picture-perfect places, but
                starting in September, tropical storms hit Central Vietnam hard.
                March is an excellent time to see Hội An when the fields,
                gardens and streets are awash in bright blossoms and soothing
                greens. From May to August, the town can be hot, and you’ll want
                to head to the beach to cool off.
              </p>
              <p>
                {' '}
                In the late months of the year, from September to November, Hội
                An sees a lot of rain and even a few small floods. The
                temperatures begin to dip and reach their coldest point in
                January, warming up just before the Vietnamese new year.
              </p>
            </div>
            {/* Weather in Da Lat */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Da Lat</h3>
              <img src={dalat} alt="Weather in Da Lat" />
              <p>
                <b>April - October: </b> rainy, warm to hot, cloudy <br />
                <b>November - May: </b>cool to cold, dry, clear skies
              </p>
              <p>
                Nestled in the central highlands, this charming mountain city is
                appreciated for its temperate climate. The air in Da Lat is
                always fresh and crisp. The mountains provide consistent cool
                temperatures and pleasant breeze, making it a great spot to
                escape the heat of the cities.
              </p>
              <p>
                Da Lat’s rainy season is from April until October. Temperatures
                are generally consistent with lows of 20 degrees in January and
                highs of 30 degrees in July.
              </p>
            </div>
            {/* Weather in HCMC & the Mekong Delta */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in HCMC & the Mekong Delta</h3>
              <img src={mekong} alt="Weather in HCMC & the Mekong Delta" />
              <p>
                <b>May to November: </b> sporadic rainfall, hot, humid <br />
                <b>December to April: </b>clear skies, hot, sunny
              </p>
              <p>
                Southern Vietnam and Hồ Chí Minh city have consistent
                temperatures year-round. HCMC is either hot and dry or hot and
                rainy, although there are some pleasant fresh days early in the
                year, and some scorching days mid-year.
              </p>
              <p>
                Temperatures are normally around 30 degrees, with sunshine. From
                May to November, the wet season brings a dependable afternoon
                downpour, usually lasting a few hours.
              </p>
            </div>
            {/* Weather in Phú Quốc */}
            <div className="tip-container">
              <h3 className="tip-title">Weather in Phú Quốc</h3>
              <img src={phuquoc} alt="Weather in Phú Quốc" />
              <p>
                <b>July - September: </b> stormy, hot, humid <br />
                <b>October - June: </b>clear skies, hot, sunny
              </p>
              <p>
                The island of Phú Quốc has some of Vietnam’s best beaches and
                promises balmy weather year-round. However, you might want to
                avoid visiting in the rainy season, from July through September.
              </p>
              <p>
                During these months some storms roll through, making ferrying
                dangerous and the beaches less than ideal. The rest of the year
                is hot and dry, and Phú Quốc is a sublime tropical escape in
                December and January.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WeatherTipsPage;
