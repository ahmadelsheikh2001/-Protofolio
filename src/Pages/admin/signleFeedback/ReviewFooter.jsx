import React from 'react';
import { CancelIcon } from '../../../UI/Icons';
import Api, { handleApiError } from '../../../config/api';
import { notifySuccess } from '../../../config/toastify';
import { feedBackData } from '../../../redux/slices/feedback.slice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


const ReviewFooter = props => {

  const { id } = useParams()
  const dispatch = useDispatch()
  function updateFeedback(id, status) {
    Api.patch("/feedback/" + id, { status })
      .then(() => {
        notifySuccess("FeedBack is " + status)
        dispatch(feedBackData())
      })
      .catch((error) => handleApiError(error))
  }
  console.log(props);
  return (
    <div
      style={{
        display: 'flex', columnGap: '12px', justifyContent: 'center', padding: '16px', position: 'absolute', right: '0', width: '100%', zIndex: '-1'
      }}
      className='review_footer'
    >
      <span className={props.status}>
        {props.status === 'pennding' ? 'في الأنتظار' : props.status === 'approved' ? 'تم قبولة' : 'تم رفضه'}
      </span>
      {props?.status == "pending" && <>
        <button onClick={() => updateFeedback(id, "approved")} className='button_control'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2452_23548)">
              <path d="M10.4999 16.9998C10.2369 17 9.97649 16.9484 9.73352 16.8478C9.49054 16.7472 9.26978 16.5998 9.08387 16.4138L5.29987 12.7148C5.11024 12.5291 5.00213 12.2758 4.99931 12.0104C4.9965 11.745 5.09922 11.4894 5.28487 11.2998C5.47052 11.1102 5.7239 11.0021 5.98926 10.9992C6.25463 10.9964 6.51024 11.0991 6.69987 11.2848L10.4929 14.9918L17.2989 8.2918C17.4908 8.12292 17.7401 8.03397 17.9956 8.04321C18.2511 8.05245 18.4933 8.15919 18.6725 8.34148C18.8518 8.52378 18.9544 8.7678 18.9593 9.0234C18.9642 9.279 18.871 9.52677 18.6989 9.7158L11.9059 16.4228C11.721 16.6067 11.5016 16.7523 11.2603 16.8513C11.0191 16.9504 10.7607 17.0008 10.4999 16.9998ZM23.9999 18.9998V12.3398C24.0372 9.25725 22.907 6.27469 20.8362 3.99097C18.7654 1.70725 15.9074 0.291436 12.8359 0.0277985C11.1215 -0.0921438 9.4014 0.157538 7.79191 0.759951C6.18241 1.36236 4.72108 2.30345 3.50679 3.51955C2.29249 4.73564 1.35357 6.19836 0.753545 7.80875C0.153518 9.41914 -0.0936135 11.1396 0.0288701 12.8538C0.47087 19.2078 6.08187 23.9998 13.0829 23.9998H18.9999C20.3255 23.9982 21.5963 23.4709 22.5337 22.5336C23.471 21.5962 23.9983 20.3254 23.9999 18.9998ZM12.6999 2.0238C15.2663 2.25084 17.6518 3.44071 19.377 5.35435C21.1021 7.268 22.0392 9.76362 21.9999 12.3398V18.9998C21.9999 19.7955 21.6838 20.5585 21.1212 21.1211C20.5586 21.6837 19.7955 21.9998 18.9999 21.9998H13.0829C7.04887 21.9998 2.39987 18.0998 2.02487 12.7158C1.92642 11.3444 2.11184 9.96739 2.56955 8.67087C3.02726 7.37434 3.74742 6.18613 4.68504 5.18047C5.62266 4.17481 6.7576 3.37331 8.01894 2.82605C9.28028 2.27878 10.6409 1.99751 12.0159 1.9998C12.2429 1.9998 12.4719 2.0088 12.6999 2.0238Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_2452_23548">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          قبول الرأي
        </button>
        <button onClick={() => updateFeedback(id, "rejected")} className='button_control cancel'><CancelIcon />رفض الطلب</button>

      </>}
    </div>
  )
}

export default ReviewFooter