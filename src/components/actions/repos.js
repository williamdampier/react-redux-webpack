import axios from 'axios';

export const getRepos = (searchQuery = "stars:%3E1") =>
    {
        return async (dispatch) => {
            const response = await axios.get(`https://api.github.com/search/repositories?q={searchQuery}&sort=stars`);
     
        }
    }