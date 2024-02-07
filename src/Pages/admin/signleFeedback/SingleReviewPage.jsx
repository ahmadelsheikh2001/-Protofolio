import React, { useEffect, useState } from 'react'
import SingleReview from '../signleFeedback/SingleReview';

const SingleReviewPage = () => {

  const [currentReview, setCurrentReview] = useState(null)

  const Review = {
    id: 2312,
    name: 'مصطفي كامل',
    reactions: ['مساعد', 'جاد', 'مجتهد', 'ودود', 'ذكي'],
    job: 'مصمم تجربة المستخدم',
    review: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..',
    status: 'pennding'
  };

  useEffect(() => {
    setCurrentReview(Review)
  }, []);

  if(!currentReview) {
    return (<h3>Loading....!</h3>)
  };

  const approveReview = () => {
    setCurrentReview({...currentReview, status: 'approved'});
  };
  const refuseReview = () => {
    setCurrentReview({...currentReview, status: 'canceled'});
  };

  return (
    <SingleReview onRefuseReview={refuseReview} onApproveReview={approveReview} {...currentReview}/>
  )
}

export default SingleReviewPage