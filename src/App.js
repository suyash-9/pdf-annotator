import React from 'react';

import './App.css';
import { Link} from "react-router-dom";

const App = () => {
  
  

  return (
    <div className='container'>
      <Link to="/sample1">Sample 1</Link>
      <Link to="/sample2">Sample 2</Link>
      <Link to="/sample3">Sample 3</Link>
    </div>
  );
};

export default App;


