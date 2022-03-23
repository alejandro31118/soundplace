import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { languages } from './languages';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icons.min.css';

const LangSelector = () => {
    const currentLanguage = cookies.get('i18next') || 'en'
    const currentLanguageCode = languages.find((lang) => lang.code === currentLanguage)
    const { t } = useTranslation()

    return (
      <div className="dropdown">
        <button className='btn btn-link dropdown-toggle' type='button' data-bs-toggle='dropdown'>
          <span className={`flag-icon flag-icon-${currentLanguageCode.country_code}`} />
        </button>
        <ul className='dropdown-menu'>
          {languages.map(language => (
            <li key={language.country_code}>
              <a className='dropdown-item' onClick={() => { i18next.changeLanguage(language.code) }}>
                <span className={`flag-icon flag-icon-${language.country_code} mx-2`} style={{ opacity: currentLanguage === language.code ? 0.5 : 1 }} />
                {language.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LangSelector;