import http from "./httpservices";

export function deleteComment(dataId) {
    
    return http.delete(`/comments/${dataId}`)
}