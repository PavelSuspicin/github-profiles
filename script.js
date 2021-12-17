const APIURL = 'https://api.github.com/users/';

getUser('PavelSuspicin');

async function getUser(username) {
  const res = axios(APIURL + username);
}
