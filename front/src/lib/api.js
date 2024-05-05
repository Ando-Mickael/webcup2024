export const fetcher = async (url, payload) => {
  const options = {
    method: payload ? "POST" : "GET",
    ...(payload && { body: payload }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return fetch(url, options).then((r) => r.json());
};
