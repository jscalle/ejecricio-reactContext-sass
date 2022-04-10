import Component from './components/component';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
import './styles/App.scss';

function App() {
  const initState = useInitialState()
  return (
    <AppContext.Provider value={initState}>
      <Component />
    </AppContext.Provider>
  );
}

export default App;
