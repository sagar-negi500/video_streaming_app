const GOOGLE_API_KEY="AIzaSyDH8TMj4cTEkl6sBCN3DQQJago0xrstYbM"
export const ApiUrl ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTION_API= "https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="