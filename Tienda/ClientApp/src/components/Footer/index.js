import React from 'react';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';

const Footer = () => {
    return (
      <footer className="app-footer">
        <span className="d-inline-block">Tienda Online {new Date().getFullYear()}</span>
      </footer>
    );
  }
;

export default Footer;
