let iranCity = require("iran-city");

const provinces: { id: number; name: string; slug: string }[] =
  iranCity.allProvinces();

export const formattedProvinces = () => {
  let newProvinces: { id: number; name: string }[] = [];
  provinces.forEach((object) => {
    const newObject = { id: object.id, name: object.name };
    newProvinces.push(newObject);
  });
  return newProvinces;
};

export const getCitiesOfProvinceById = (provinceId: {
  id: number;
  name: string;
}) => {
  const citiesOfTheProvince: {
    id: number;
    name: string;
    slug: string;
    province_id: number;
  }[] = iranCity.citiesOfProvince(provinceId.id);

  let newCitiesObject: { id: number; name: string }[] = [];
  citiesOfTheProvince.forEach((object) => {
    const newObject = { id: object.id, name: object.name };
    newCitiesObject.push(newObject);
  });

  return newCitiesObject;
};
