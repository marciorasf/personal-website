import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export const head = {
  title: 'marciorasf', // e.g: 'Name | Developer'
  description: '@marciorasf personal website', // e.g: Welcome to my website
};

export default () => {
  const { title, description } = head;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang="en" />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
