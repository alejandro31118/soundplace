import LangSelector from './components/LangSelector/LangSelector';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <LangSelector />
      {t('TEST')}
    </div>
  );
}

export default App;
