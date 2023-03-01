const config = {
    baseUrl: "http://localhost:8081/api/v1",
};
fetch("");
const api = async function (url, init = {
    baseUrl: config.baseUrl,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}) {
    const response = fetch(init.baseUrl + url || url, init);
    return response;
};
export { api };
