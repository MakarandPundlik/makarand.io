import ReactDOM from 'react-dom/client';

const REDIRECT_URL = 'https://makarandpundlik.github.io/';

if (typeof window !== 'undefined' && window.location.href !== REDIRECT_URL) {
  window.location.replace(REDIRECT_URL);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(null);
