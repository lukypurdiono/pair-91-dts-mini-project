import axios from "axios";

// Di sini kita membuat instance dari axios
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    api_key: "b39c2f60002237c4058de4b8064885e1",
  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default tmdbInstance;
