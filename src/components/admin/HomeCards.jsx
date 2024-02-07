import React from 'react';
import { AdminCardOne, AdminCardThree, AdminCardTwo } from '../../UI/Icons';
import SingleCard from './SingleCard';

const HomeCards = ({ liks, orders, feedback }) => {

  const cardsData = [
    {
      id: 1,
      title: 'عدد طلبات العمل',
      num: orders,
      icon: <AdminCardOne/>
    },
    {
      id: 2,
      title: 'عدد أراء الناس',
      num: feedback,
      icon: <AdminCardTwo/>
    },
    {
      id: 3,
      title: 'عدد الإعجابات',
      num: liks,
      icon: <AdminCardThree/>
    },
  ];


  return (
    <div className='cards_container flex'>
      {cardsData.map(card => <SingleCard key={card.id} {...card}/>)}
    </div>
  )
}

export default HomeCards