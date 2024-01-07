import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'e74613bf74msh8413fc302c31565p105998jsn2fe62134114e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };