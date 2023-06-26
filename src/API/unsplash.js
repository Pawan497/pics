import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    headers: {
        Authorization: "Client-ID 4q1VxbsJa-mfjIVujuSVwUmRJDk8QxLvRI2VMgZJVjE"
    }
});

