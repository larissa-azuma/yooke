import React from 'react';
import { Typography, Container ,} from '@mui/material';

const trajetData = [
  { destination: 'Carrfour Mendong', departureTime: '03 mars 2024' },
  { destination: 'Avenue des banques', departureTime: '07:30 AM' },
];

const location =  [
    {  time: '07:30 AM', date:'o3 mars 2024',price: '1,000 FCFA',seatsAvailable: '2 Places Vides' },
    {  time:'8:00 AM', date:'o3 mars 2024', price:'1,000 FCFA', seatsAvailable:'2 Places Vides'},
    {  time:'5:00 AM', date:'o3 mars 2024',   price:'500 FCFA', seatsAvailable:'1 Places Vides'},
    {  time:'6:30 AM', date:'12 mars 2024',  price:'1,500 FCFA', seatsAvailable:'3 Places Vides'},
    {  time:'7:15 AM', date:'12 mars 2024',  price:'1,500 FCFA',seatsAvailable:'3 Places Vides'},
    {  time:'3:45 AM', date:'12 mars 2024',  price:'2,000 FCFA',seatsAvailable:'4 Places Vides'},
    {  time:'6:45 AM', date:'12 mars 2024',  price:'1,000 FCFA', seatsAvailable:'2 Places Vides'},
    {  time:'6:45 AM', date:'o2 april 2024', price:'2,000 FCFA', seatsAvailable:'4 Places Vides'},
    {  time:'04:30 AM',date:'o2 april 2024',  price:'1,500 FCFA',seatsAvailable:'3 Places Vides'},

];


function Trajetdisponible() {
  return (
    <div>
      <Typography variant='h3'>Trajets disponibles</Typography>
      <Container>
        <div className='id'>
          <div className='Row'>
          </div>
        </div>
        <div className='Body'>
          {trajetData.map((row) => (
            <div className='Row' key={row.destination}>
              <div className='Cell' component="id" scope="row">
                {row.destination}
              </div>
              <div className='Cell' align="right">{row.departureTime}</div>
            </div>
          ))}
        </div>
      </Container>
      <div className="Trajetdisponibles">
      {location.map((route, index) => (
        <div key={index} className="route-card">
           <div> 
          <p className='Deperture time'> {route.time}</p>
          <p className='time'>{route.date}</p>
          <p className='price' > {route.price} </p>
          <p className='seats available'> {route.seatsAvailable}</p>
          <div></div>
        </div>
        </div>
      ))}
      </div>
    </div>

  );
}

export default Trajetdisponible;
