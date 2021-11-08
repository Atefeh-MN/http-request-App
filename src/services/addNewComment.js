import http from "./httpservices";

export function addNewComment(data) {
    const token='seceur token'
    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return http.post('/comments', data,header);
}