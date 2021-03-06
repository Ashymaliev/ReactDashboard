import React from 'react';

export const columns = [
  {
    field: 'Order ID',
    sortable: false,
    headerName: '',
    width: 200,
    renderCell: (params) => (
      <div className='row user__row'>
        <span className='user__name'>{params.row.userID}</span>
      </div>
    ),
  },
  { field: 'fullName', headerName: 'Customer', width: 200 },
  {
    field: 'dateOfRegistry',
    headerName: 'Date',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Status',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    width: 200,
  },
];

export const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    avatar: 'https://www.pngkey.com/png/detail/55-556528_pic-avatars-for-jira-star-wars.png',
  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];