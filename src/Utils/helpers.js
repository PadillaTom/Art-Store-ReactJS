export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);

  return newNumber;
};

export const getUniqueValues = (data, type) => {
  // Get the VALUE of an ITEM(type) inside the DATA(array of objects).
  let uniqueDataType = data.map((item) => item[type]);

  if (type === "colors") {
    uniqueDataType = uniqueDataType.flat();
  }

  // Returns an Array [v1,v2,v3,v4, etc.. ] (ALL, V1, V2, V4) (NO Repeated)
  return ["all", ...new Set(uniqueDataType)];
};
