import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: '****',
		language: 'ko-KR',
		region: 'KR',
	},
	headers: {
		'Content-Type': 'application/json',
	}
});

export default instance;