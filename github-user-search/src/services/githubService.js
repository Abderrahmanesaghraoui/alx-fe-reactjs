import axios from 'axios';

const API_BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async (params = {}) => {
  const { username, location, minRepos, page = 1, perPage = 10 } = params;
  
  let query = username ? `${username} in:login` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};