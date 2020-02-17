import React from 'react';
import './styles/app.scss';
import Location from './component/location/location';
import Header from './component/header/header'
import ErrorBoundary from './component/error_boundary';

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <Location />
    </ErrorBoundary>
  );
}

export default App;
