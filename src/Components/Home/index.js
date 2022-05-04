import React from 'react';

import SupportEngine from '../SupportEngine';

import './index.css';

const Home = () => {
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} ></div>

        <SupportEngine />
    </div>
  );
}

export default Home;

export const htmlCode = `
<div>
   
</div>
`

