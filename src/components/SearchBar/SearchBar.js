import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ getQuery }) => {
    const { t } = useTranslation()
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <form className='container mt-2 bg-dark'>
            <input className='form-control mb-4' 
                type='text' 
                placeholder={ t('SEARCH_PLACEHOLDER') } 
                value={ text } 
                onChange={ (e) => onChange(e.target.value) } 
                autoFocus 
            />
        </form>
    );
};

export default SearchBar;