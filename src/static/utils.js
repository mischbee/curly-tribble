export const postRequest = async (endpoint, body) => {
  await fetch(process.env.API_URL + endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const getUser = async (user) =>
  await fetch(`${process.env.API_URL}` + "user?id=" + user);
