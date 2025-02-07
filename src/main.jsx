import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import "bootstrap/dist/css/bootstrap.css"
// // // import Parent from './props/parent';
import Container from './compositional-component/container';
// // import Counter from './react-hook/Counter';
// import PostDataComponent from './fetch/PostDataComponent';
// import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container/>
  </StrictMode>
)
