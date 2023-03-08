export const Delete = (id, refetch) => {
  const url = `${process.env.REACT_APP_API_URL}/inventory/${id}`;
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, requestOptions)
    .then((res) => res.json())
    .then(() => {
      refetch();
    });
};
