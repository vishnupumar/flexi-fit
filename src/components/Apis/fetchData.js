export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const exerciseVideosOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API,
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
