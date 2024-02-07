import React, { useEffect, useState } from "react";
import Request from "./Request";

const SingleRequestPage = () => {
  const [currentRequest, setCurrentRequset] = useState(null);

  const request = {
    id: "2316",
    name: "مصطفي كامل",
    email: "mos.kamel95@gmail.com",
    needs: ["مشروع من البداية", "تصميم موقع", "تصميم تطبيق"],
    aboutProject:
      "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
    budget: "1 - 2 ألف",
    time: "4 - 5 أشهر",
    file: "Brief.pdf",
    status: "pennding",
  };

  useEffect(() => {
    setCurrentRequset(request);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentRequest) {
    return <h3>Loading....!</h3>;
  }

  const answerEmail = () => {
    setCurrentRequset({ ...currentRequest, status: "approved" });
  };
  const cancelRequset = () => {
    setCurrentRequset({ ...currentRequest, status: "canceled" });
  };

  
  return (
    <Request
      onCancelRequset={cancelRequset}
      onGetAnswered={answerEmail}
      {...currentRequest}
    />
  );
};

export default SingleRequestPage;
