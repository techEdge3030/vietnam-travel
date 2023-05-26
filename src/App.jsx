import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components';
import {
  ErrorPage,
  HistoryTipsPage,
  HomePage,
  SharedLayout,
  SinglePlacePage,
  SingleTourPage,
  TransportTipsPage,
  VisaTipsPage,
  WeatherTipsPage,
  SafetyTipsPage,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />}></Route>

            <Route path="tours/:id" element={<SingleTourPage />}></Route>
            <Route path="places/:id" element={<SinglePlacePage />}></Route>

            <Route path="tips/visa" element={<VisaTipsPage />}></Route>
            <Route
              path="tips/transport"
              element={<TransportTipsPage />}
            ></Route>
            <Route path="tips/weather" element={<WeatherTipsPage />}></Route>
            <Route path="tips/safety" element={<SafetyTipsPage />}></Route>
            <Route path="tips/history" element={<HistoryTipsPage />}></Route>

            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
