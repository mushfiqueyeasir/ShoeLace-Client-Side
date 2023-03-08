export const Update = (body, refetch) => {
  const url = `${process.env.REACT_APP_API_URL}/inventory/${body._id}`;
  delete body._id;

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch(url, requestOptions)
    .then((res) => res.json())
    .then(() => {
      refetch();
    });
};
