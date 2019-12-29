import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: "http://localhost:3000/api",
        withCredentials: false,
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTA3NTI3MmQyMmNlNjNhM2U5ZjQ5ZGYiLCJpYXQiOjE1Nzc1NDA0MDN9.pwpNkXLQZmdritaBUTGOfNSLpNHCTIfAOQNd8_0-00o"
        }
    })
}