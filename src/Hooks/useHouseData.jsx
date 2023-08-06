import { useEffect, useState } from "react";

const useHouseData = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    fetch("../../public/fake.json")
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
      });
  }, []);
  return [apartments];
};

export default useHouseData;
