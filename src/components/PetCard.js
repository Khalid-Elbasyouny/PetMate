import React from "react";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image || "/default-pet.jpg"} alt={pet.name} className="pet-image" />
      <h3>{pet.name}</h3>
      <p>السلالة: {pet.breed}</p>
      <p>العمر: {pet.age} سنوات</p>
      <p>الجنس: {pet.gender}</p>
      <Link to={`/pets/${pet.id}`} className="details-button">عرض التفاصيل</Link>
    </div>
  );
};

export default PetCard;
