import http from "./httpservices";

export function getAllComment() {
    return http.get('/comments')
}