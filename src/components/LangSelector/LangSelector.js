import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from './languages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icons.min.css';

const LangSelector = () => {
    const { t } = useTranslation()

    return (
      <div className="dropdown">
        <button className='btn btn-link dropdown-toggle' type='button' data-bs-toggle='dropdown'>
          {t('LANG')}
        </button>
        <ul className='dropdown-menu'>
          {languages.map(language => (
            <li key={language.country_code}>
              <a className='dropdown-item'>
                <span className={`flag-icon flag-icon-${language.country_code} mx-2`} />
                {language.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LangSelector;