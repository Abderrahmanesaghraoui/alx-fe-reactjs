const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
const TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN; // Optional

export const searchUsers = async (query) => {
  const response = await axios.get(`${API_URL}/search/users?q=${query}`, {
    headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {}, // Optional auth
  });
  return response.data;
};