import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmZhYjllOTU2MjQ4NmRkODZiNTc2MDljZmRlNTJmYyIsInN1YiI6IjY0Mzg0Y2I2NGE1MmY4MDBmNGY3NWY1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQ84pzlF1-m3TRwWIfR_ezxJDpXIs-QJTEKBSSL3_cY '
    }
})

export default apiFilmes