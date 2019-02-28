import React from 'react';
import SearchInput from '../shared/components/Search';
import UsersTable from '../shared/components/Table';
import Header from '../shared/components/Header/Header';

export default function Search() {
  return (
    <>
      <Header/>
      <SearchInput />
      <UsersTable />
    </>
  );
};
