import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from '../api/axios'
import requests from '../api/request';
import "./Banner.css";

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
		// console.log('movieDetail', movieDetail);
		setMovie(movieDetail);
	}

	// 지정된 문자열 개수보다 많으면 '...' 표시로 
	const truncate = (str, n) => {
		return str?.length > n ? str.substring(0, n) + "..." : str;
	}

	return (
		<header 
			className='banner'
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
				backgroundPosition: 'top center',
				backgroundSize: 'cover'
			}}
		>
			<div className='banner__contents'>
				<h1 className='banner__title'>
					{ movie.title || movie.name || movie.original_name }
				</h1>

				<div className='banner__buttons'>
					{ movie?.videos?.results[0]?.key && 
						<button className='banner__button play'>
						Play
						</button>
					}
				</div>

				<p className='banner__desciption'>
					{ truncate(movie.overview, 100) }
				</p>
			</div>
			<div className='banner--fadeBottom'  />
		</header>
	)
}

export default Banner

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   height: 100vh;
// `;

// const HomeContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const Iframe = styled.iframe`
//   width: 100%;
//   height: 100%;
//   z-index: -1; 
//   opacity: 0.65;
//   border: none;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `;