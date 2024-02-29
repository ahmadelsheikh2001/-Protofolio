import React, { useEffect } from 'react'
import Table from '../../../UI/table/Table';
import SingleFeedback from './SingleFeedback';
import { useDispatch, useSelector } from 'react-redux';
import { feedBackData } from '../../../redux/slices/feedback.slice';

const FeedbacksTable = () => {
  const feeedbacks = useSelector((state) => state.feedback.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(feedBackData())
  }, [])

  const tableHeaders = ['الاسم', 'التعليقات', 'التاريخ', 'الحالة'];

  return (
    <Table tableHead={tableHeaders}>
      {feeedbacks.map((feedback, index) => <SingleFeedback key={feedback.id} index={+index} feedback={feedback} />)}

      {
        // currentData.map((order, index) => <SingleFeedback key={order.id} index={+index} {...order}/>)
      }
    </Table>
  )
}

export default FeedbacksTable