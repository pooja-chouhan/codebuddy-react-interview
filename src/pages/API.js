export const submitForm = async data => {
  const response = await fetch('https://codebuddy.review/submit', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(res => res.json().then(result => result))
    .catch(err => err);
  return response;
};

export const getUsers = async () => {
  const response = await fetch('https://codebuddy.review/posts', {
    method: 'GET',
  })
    .then(res => res.json().then(result => result))
    .catch(err => err);
  return response.data;
};
