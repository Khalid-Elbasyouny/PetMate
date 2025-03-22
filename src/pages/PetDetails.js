import React from "react";
import { useParams } from "react-router-dom";

const PetDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>تفاصيل الحيوان الأليف</h2>
      <p>معرف الحيوان: {id}</p>
      <p>تفاصيل إضافية سيتم إضافتها لاحقًا...</p>
    </div>
  );
};

export default PetDetails;
