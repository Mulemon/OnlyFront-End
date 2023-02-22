const config = {
  baseUrl: "http://localhost:8081",
};

const api = async function (url, init = { ...config }) {
  const response = fetch(init.baseUrl + url || url, init);
  return {
    response,
  };
};

export { api };
