export const geocodeApi = async (city) => {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=pt&format=json`,
    );

    if (!response.ok) {
      return [];
    }

    const json = await response.json();

    if (!json.results) {
      return [];
    }

    return { response, json };
  } catch (error) {
    throw new Error(error);
    return [];
  }
};
