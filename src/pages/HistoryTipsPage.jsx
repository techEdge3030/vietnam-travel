import React from 'react';
import historyImg from '../assets/tips/history/history1.jpg';
import { dynasties } from '../data';
import { Dynasty, TipsHeader, ImageHeader } from '../components';

const HistoryTipsPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="tips-container">
          <ImageHeader img={historyImg} />

          <article className="article-container">
            <TipsHeader
              title="Vietnam is a country founded in legends. Millennia of invasions and conflicts have shaped Vietnamese culture into what you see today."
              author="Nam Nguyen"
              date="28 November 2021"
            />

            {dynasties.map((dynasty, index) => {
              return <Dynasty dynasty={dynasty} key={dynasty.id} />;
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default HistoryTipsPage;
