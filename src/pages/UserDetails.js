import React from 'react';
import UserInfo from '../shared/components/UserInfo';
import Footer from '../shared/components/Footer/Footer'
import Header from '../shared/components/Header/Header';

export default function UserDetails() {
  return (
    <>
      <Header/>
      <UserInfo />
      <Footer />
    </>
  )
}