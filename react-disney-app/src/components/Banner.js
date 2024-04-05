import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from '../api/axios'
import requests from '../api/request';
import "./Banner.css";

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [isClicked, setIsClicked] = useState(false);

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

	if (!isClicked) {
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
							<button 
								className='banner__button play'
								onClick={()=> setIsClicked(true) }
							>
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
	} else {
		// <iframe 
		// width="560" 
		// height="315" 
		// src="https://www.youtube.com/embed/adMcnTUMVns?si=_mINFDka2YPkoaVo" 
		// title="YouTube video player" 
		// frameborder="0" 
		// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		// referrerpolicy="strict-origin-when-cross-origin" 
		// allowfullscreen></iframe>

		return (
			<>
			<Container>
				<HomeContainer>
					<Iframe
						src={`https://www.youtube.com/embed/${movie.videos.results[0].key}
						?controls=0&autoplay=1&playlist=${movie.videos.results[0].key}`}
						width="640" 
						height="360" 
						frameborder="0" 
						allow="autoplay; fullscreen"
					></Iframe>
				</HomeContainer>
			</Container>
			<button onClick={()=>setIsClicked(false)}>
				X
			</button>
			</>
		)
	}// end if
}

export default Banner

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1; 
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;