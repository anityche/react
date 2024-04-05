import React, {useState, useEffect} from 'react'
import axios from '../api/axios'
import requests from '../api/request';

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async() => {
		// 현재 상영중인 영화 정보를 가져오기
		const response = await axios.get(requests.fetchNowPlaying);
		// console.log('response', response);

		// 여러 영화중 영화 하나의 ID를 가져오기
		const movieId = response.data.results[
			Math.floor(Math.random() * response.data.results.length)
		].id;
		// console.log('movieId', movieId);

		// 특정 영화의 더 상세한 정보를 가져오기(비디오 정보 포함)
		const {data: movieDetail } = await axios.get(`/movie/${movieId}`,{ 
			params: {append_to_response: 'videos'}
		});
		console.log('movieDetail', movieDetail);
		setMovie(movieDetail);
	}

	return (
		<div>Banner</div>
	)
}

export default Banner