import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchdata = async (country) => {
  let changeableurl = url;
  if (country) {
    changeableurl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableurl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map(
      ({ confirmed, deaths, reportDate: date }) => ({
        confirmed: confirmed.total,
        deaths: deaths.total,
        date,
      })
    );
    return modifiedData;
  } catch (error) {
    return error;
  }
};
export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    // console.log(response)
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
