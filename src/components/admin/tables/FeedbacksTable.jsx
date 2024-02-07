import React from 'react'
import Table from '../../../UI/table/Table';
import SingleFeedback from './SingleFeedback';

const FeedbacksTable = ({ currentData }) => {

  const tableHeaders = ['الاسم', 'التعليقات', 'التاريخ', 'الحالة'];

  return (
    <Table tableHead={tableHeaders}>
      {currentData.map((order, index) => <SingleFeedback key={order.id} index={+index} {...order}/>)}
    </Table>
  )
}

export default FeedbacksTable