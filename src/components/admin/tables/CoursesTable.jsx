import React from 'react'
import Table from '../../../UI/table/Table';
import SingleCourse from '../courses/SingleCourse';

const CoursesTable = ({currentData}) => {

  const tableHeaders = ['الاسم', 'البريد الألكتروني', 'رقم التليفون', 'التاريخ', 'الحالة'];

  return (
    <Table tableHead={tableHeaders}>
      {currentData.map((order, index) => <SingleCourse key={order.id} index={index} {...order}/>)}
    </Table>
  )
}

export default CoursesTable