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
        <meta property="og:url" content="https://marciorasf.space/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="marciorasf" />
        <meta property="og:description" content="@marciorasf personal website" />
        <meta
          property="og:image"
          content="/static/50920fc8de5067e573f87412c101d551/46604/favicon.png"
        />
        <meta property="og:author" content="marciorasf" />
      </Helmet>
      <App />
    </>
  );
};
