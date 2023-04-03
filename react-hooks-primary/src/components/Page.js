import React from 'react';
import Content from './Content.js';
import Footer from './Footer.js';
import Header from './Header.js';

const Page = () => {
  return (
    <div className='page'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default Page