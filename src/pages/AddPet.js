import React, { useState } from "react";

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تمت إضافة الحيوان:", pet);
  };

  return (
    <div>
      <h2>إضافة حيوان جديد</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="اسم الحيوان" onChange={handleChange} required />
        <input type="text" name="breed" placeholder="السلالة" onChange={handleChange} required />
        <input type="number" name="age" placeholder="العمر" onChange={handleChange} required />
        <select name="gender" onChange={handleChange} required>
          <option value="">اختر الجنس</option>
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
        </select>
        <button type="submit">إضافة</button>
      </form>
    </div>
  );
};

export default AddPet;
