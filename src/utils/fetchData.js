export const exerciseOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '0f75d52269msh2463cda3a7347c9p1c7ee7jsn7ec26212e854',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
