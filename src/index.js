import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18n } from 'react-polyglot';

const locale = window.locale || 'en';

ReactDOM.render(
  <I18n locale={locale} messages={{}}>
    <App />
  </I18n>,
  document.getElementById('root'));
