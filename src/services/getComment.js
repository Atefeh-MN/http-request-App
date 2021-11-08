import http from "./httpservices";

export function getComment(dataId) {
    return http.get(`/comments/${dataId}`)
}