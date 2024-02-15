import React, { useEffect, useState } from 'react'
import SingleReview from '../signleFeedback/SingleReview';

const SingleReviewPage = () => {

  const [currentReview, setCurrentReview] = useState(null)

  const Review = {
    id: 2312,
    name: 'مصطفي كامل',
    reactions: [{ iimg: 'مساعد', icon: "../../assets/Mask Group 1152.svg" },
    { iimg: 'جاد', icon: "../../assets/Mask Group 1154.svg" },
    { iimg: 'مجتهد', icon: "../../assets/Mask Group 1157.svg" },
    { iimg: 'ودود', icon: "../../assets/Mask Group 1149.svg" },
    { iimg: 'ذكي', icon: "../../assets/Mask Group 1159.svg" }],
    job: 'مصمم تجربة المستخدم',
    review: 'هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..',
    status: 'pennding',
    img: "../../assets/Ellipse 1.png",
  };

  useEffect(() => {
    setCurrentReview(Review)
  }, []);

  if (!currentReview) {
    return (<h3>Loading....!</h3>)
  };

  const approveReview = () => {
    setCurrentReview({ ...currentReview, status: 'approved' });
  };
  const refuseReview = () => {
    setCurrentReview({ ...currentReview, status: 'canceled' });
  };

  return (
    <SingleReview onRefuseReview={refuseReview} onApproveReview={approveReview} {...currentReview} />
  )
}

export default SingleReviewPage