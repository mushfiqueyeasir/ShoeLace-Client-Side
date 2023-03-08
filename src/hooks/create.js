export const Create = (body, navigate) => {
  const url = `${process.env.REACT_APP_API_URL}/inventory/`;
  delete body._id;

  const requestOptions = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch(url, requestOptions)
    .then((res) => res.json())
    .then(() => {
      navigate();
    });
};
