import React from 'react';
import axios from 'axios';
import TableData from './tableData';
import SearchBar from './searchBar'
import {PrimaryBtn} from '../../components/btns';
import './style.scss';

export default function Manage() {
  const [usersData, setUsersData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);
  return (
    <div className='manage'>
    <div className='manage__top'>
    <SearchBar style={{borderRadius: '4px'}}/>
      <PrimaryBtn text={'Add user'} />
    </div>
      <div style={{ height: 450, width: '100%', background: 'white', borderRadius: '4px'}}>
        <TableData ayday={usersData}/>
      </div>
    </div>
    
  );
}