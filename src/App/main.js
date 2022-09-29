//Data

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers:{
        'Content-Type': 'aplication/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    }
})

function likedMoviesList(){
    const item = JSON.parse(localStorage.getItem('liked_movie'))
    let movies;
    if (item) {
        movies=item
        
    } else {
        movies = {};
    }
    return movies
}

function likeMovie(movie){
    // movie.id

    const likedMovies = likedMoviesList()

    console.log(likedMovies);

    if (likedMovies[movie.id]) {
        likedMovies[movie.id] = undefined
        
    }else {
        likedMovies[movie.id] = movie
    }
    localStorage.setItem('liked_movie',JSON.stringify(likedMovies))
    getLikedMovies()
}

// Utils

/*
La API Observador de Intersección provee una vía asíncrona para observar cambios en
 la intersección de un elemento con un elemento ancestro o con el viewport del documento 
 de nivel superior.El IntersectionObserver recibe espera dos argumentos, un callback y
  options

en este caso solo se va a definir el callback debido a que vamos a estar observando
a todo el documento HTML.
*/
const lazyLoader = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log({entry})
            const url = entry.target.getAttribute('data-img')
            console.log(entry.target.isIntersecting)
            entry.target.setAttribute('src',url)
            
                   
        }
    })
})


function movieContainer(section,movies,{lazyload = false, clean = true}={}){
   if (clean) {
    section.innerHTML = ''
   }
     
     
    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')
        
        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt',movie.title)
        movieImg.setAttribute(
            lazyload ?'data-img' : 'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path)
            movieImg.addEventListener('click', ()=>{
                location.hash = '#movie='+movie.id
            })
            movieImg.addEventListener('error', ()=>{
                movieImg.setAttribute(
                    'src',
                    'https://static.platzi.com/static/images/error/img404.png'
                    )
            })
            const movieBtn = document.createElement('button')
            movieBtn.classList.add('movie-btn')
            //Si mi pelicula esta guardada en ls le agregamos la clase al boton de me gusta
            likedMoviesList()[movie.id] && movieBtn.classList.add('movie-btn--liked')
            movieBtn.addEventListener('click',()=>{
                movieBtn.classList.toggle('movie-btn--liked')
                likeMovie(movie)
            })

            if(lazyload){

                lazyLoader.observe(movieImg)
            }
            console.log('error')

            movieContainer.appendChild(movieImg)
            movieContainer.appendChild(movieBtn)
            section.appendChild(movieContainer)
    }
      );

}

function createCategories(genres, container){

    container.innerHTML = ''
    genres.forEach(genres =>{

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTittle = document.createElement('h3')
        categoryTittle.classList.add('category-title')
        categoryTittle.setAttribute('id', 'id'+genres.id)
        categoryTittle.addEventListener('click', ()=>{
            location.hash =`#category=${genres.id}-${genres.name}`
        })
        const categoryTittleText = document.createTextNode(genres.name)

        categoryTittle.appendChild(categoryTittleText)
        categoryContainer.appendChild(categoryTittle)
        container.appendChild(categoryContainer)

        
    })
}


// Llamados a la api


async function getTrendingMoviesPreview(){
    const {data} = await api('trending/movie/day')
    

    const movies = data.results
    console.log({data, movies})

    movieContainer(
        trendingPreviewMovieList,
        movies,
        {
            lazyload:true,
            clean:true
        })


     /* trendingPreviewMovieList.innerHTML = ''

    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt',movie.title)
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path)
        
        movieContainer.appendChild(movieImg)
        trendingPreviewMovieList.appendChild(movieContainer)


    }); */
}

async function getCategoriesPreview(){
    const {data} = await api('/genre/movie/list')
   

    console.log("categorias")
    console.log(data)

    const genres = data.genres

    createCategories(genres,categoriesPreviewList)
    /* categoriesPreviewList.innerHTML = ''

    genres.forEach(genres =>{

        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTittle = document.createElement('h3')
        categoryTittle.classList.add('category-title')
        categoryTittle.setAttribute('id', 'id'+genres.id)
        categoryTittle.addEventListener('click', ()=>{
            location.hash =`#category=${genres.id}-${genres.name}`
        })
        const categoryTittleText = document.createTextNode(genres.name)

        categoryTittle.appendChild(categoryTittleText)
        categoryContainer.appendChild(categoryTittle)
        categoriesPreviewList.appendChild(categoryContainer)

        
    }) */


}

 async function getMoviesByCategory(id){ 
    const {data} = await api('discover/movie',{
        params:{
            with_genres: id,
        },
    })

    const movies = data.results
    maxPage = data.total_pages
    console.log('getMoviesByCategory')
    console.log({data, movies})
    
    movieContainer(genericSection,movies,{lazyload:true})
     /* genericSection.innerHTML = ''
     
    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt',movie.title)
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path)
        
        movieContainer.appendChild(movieImg)
        genericSection.appendChild(movieContainer)


    }
      ); */
}
function getPaginatedMoviesByCategory(id){
    console.log('getPaginatedMoviesBySearch')
    
    return async function(){
        const {
            scrollTop,
            clientHeight,
            scrollHeight
        } = document.documentElement;
    
        const scrollsBottom = (scrollTop+clientHeight) >= (scrollHeight-15)
        const pageIsNotMax = page < maxPage
        if (scrollsBottom && pageIsNotMax) {
            page++
            const {data} = await api('discover/movie',{
                params:{
                    with_genres: id,
                    page,
                },
            })
        
            const movies = data.results
    
            
         movieContainer(
            genericSection,
            movies,
            {
                lazyload:true,
                clean:false
            })
            /* const btnLoadMore = document.createElement('button')
            btnLoadMore.innerText= 'Cargar mas'
            btnLoadMore.addEventListener('click', ()=>{
                btnLoadMore.style.display= 'none';
                getPaginatedTrendingMovies()
                } 
            )
            genericSection.appendChild(btnLoadMore) */
            
        }
       
    } 
}

async function getMovieBySearch(query){ 
    const {data} = await api('search/movie',{
        params:{
            query,
        },
    })

    const movies = data.results
    console.log(movies)
    maxPage = data.total_pages
    console.log('cANTIDAD DE PAGIANS')
    console.log(maxPage)
    console.log({data, movies})
    
    movieContainer(genericSection,movies,{lazyload:true})
 }

 function getPaginatedMoviesBySearch(query){
    console.log('getPaginatedMoviesBySearch')
    
    return async function(){
        const {
            scrollTop,
            clientHeight,
            scrollHeight
        } = document.documentElement;
    
        const scrollsBottom = (scrollTop+clientHeight) >= (scrollHeight-15)
        const pageIsNotMax = page < maxPage
        if (scrollsBottom && pageIsNotMax) {
            page++
            const {data} = await api('search/movie',{
                params:{
                    query,
                    page
                },
            })
        
            const movies = data.results
    
            
         movieContainer(
            genericSection,
            movies,
            {
                lazyload:true,
                clean:false
            })
            /* const btnLoadMore = document.createElement('button')
            btnLoadMore.innerText= 'Cargar mas'
            btnLoadMore.addEventListener('click', ()=>{
                btnLoadMore.style.display= 'none';
                getPaginatedTrendingMovies()
                } 
            )
            genericSection.appendChild(btnLoadMore) */
            
        }
       
    } 
}
 /* async function getTrendingMovies(page = 1){

    const { data } = await api('/trending/movie/day', {
        params: {
            page,
        }
    });

    const movies = data.results;

    movieContainer(movies, genericSection, {
        lazy: true,
        clean: page == 1
    });

    const btnLoadMore = document.createElement('button');
    btnLoadMore.innerText = "Load more";
    btnLoadMore.addEventListener('click', () => {
        btnLoadMore.style.display = 'none';
        getTrendingMovies(page + 1);
    });
    genericSection.appendChild(btnLoadMore); 
} */
 
async function getTrendingMovies(){
    const {data} = await api('trending/movie/day')
    const movies = data.results
    maxPage = data.total_pages
    movieContainer(
        genericSection,
        movies,
        {
            lazyload:true,
            clean:true
        })

    /* const btnLoadMore = document.createElement('button')
    btnLoadMore.innerText= 'Cargar mas'
    btnLoadMore.addEventListener('click', ()=>{
        btnLoadMore.style.display= 'none';
        getTrendingMovies(page+1)
        } 
    )
    genericSection.appendChild(btnLoadMore) */

}


/* let page = 1;
window.addEventListener('scroll',getPaginatedTrendingMovies) */
async function getPaginatedTrendingMovies(){
    //Destructurando
    const {
        scrollTop,
        clientHeight,
        scrollHeight
    } = document.documentElement;

    const scrollsBottom = (scrollTop+clientHeight) >= (scrollHeight-15)
    // Si no es la ultima pagina
    const pageIsNotMax = page < maxPage
    //Si el scroll esta al final y no estamos en la ultima pagina entonces cargar la siguiente pagina
    if (scrollsBottom && pageIsNotMax) {
        page++
    const {data} = await api('trending/movie/day',{
        params:{
            page,
        },
    })
    const movies = data.results

    movieContainer(
        genericSection,
        movies,
        {
            lazyload:true,
            clean:false
        })
        /* const btnLoadMore = document.createElement('button')
        btnLoadMore.innerText= 'Cargar mas'
        btnLoadMore.addEventListener('click', ()=>{
            btnLoadMore.style.display= 'none';
            getPaginatedTrendingMovies()
            } 
        )
        genericSection.appendChild(btnLoadMore) */
        
    }
    
}
 async function getMovieById(id){
    const {data:movie} = await api('movie/'+id)

   const movieImgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
   console.log(movieImgUrl)
   headerSection.style.background =  `
   linear-gradient(
       180deg,
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%), 

   url(${movieImgUrl})
   
   `

    console.log(movie.title)
     movieDetailTittle.textContent = movie.title;
     movieDetailDescription.textContent = movie.overview;
     movieDetailScore.textContent = movie.vote_average;
   

     createCategories(movie.genres, movieDetailsCategoriesList)

     getRelatedMoviesId(id)

   

}
async function getRelatedMoviesId(id){
    const {data} = await api( `movie/${id}/recommendations` )
    const relatedMovies= data.results

    movieContainer(relatedMoviesContainer,relatedMovies,true)
}

function getLikedMovies(){
    const likedMovies = likedMoviesList();
    const movieArray = Object.values(likedMovies)

    movieContainer(
        likedMoviesListArticle,
        movieArray,
        {
            lazyload = true,
             clean = true,
        } = {}
        )
     
     
    console.log(likedMovies);
}




// Cantidad de scroll que se ha hecho en la pagina
document.documentElement.scrollTop
// Cuanto es el alto de nuestro navegador
document.documentElement.clientHeight
// Cuanto scroll se puede hacer en la aplicacion
document.documentElement.scrollHeight

// La suma del scroll al final de la pagina mas el alto del navegador es igual a cuanto scroll podemos hacer
// document.documentElement.scrollTop + 
// document.documentElement.clientHeight = document.documentElement.scrollHeight

// localStorage
/*
 No permite guardar objetos solo string 
El metodos JSON.stringify permite convertir objetos u}o Arrays a string*/



import React, { useState, useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
// SocketIO
import { io } from 'socket.io-client';

// Components
import { GoBackButton } from '../components';

// State
import { state } from '../state';
import { useSnapshot } from 'valtio';

const socket = io();

const Chat = () => {
	const snap = useSnapshot(state);
	const [chatInfo, setChatInfo] = useState();
	const [chatMessages, setChatMessages] = useState([]);
	const [messageToSend, setMessageToSend] = useState('');

	const messagesEnd = useRef();

	// Scroll to the bottom of the messages
	const scrollToBottom = () => {
		if (snap.currentUserId && snap.currentChatId) {
			messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Send a message when the user press the Enter key
	const handleEnter = (e) => {
		if (e.keyCode === 13) {
			//// console.log('Enter pressed');
			sendMessage();
		}
	};

	// Get all the data from the chat
	const getChat = async (id) => {
		setChatMessages([]);
		const chatInfo = await (await fetch(`/api/chat/${id}`)).json();
		setChatInfo(chatInfo.data[0]);
		const chatMessages = await (await fetch(`/api/message?chat=${id}`)).json();
		setChatMessages(chatMessages.data);
	};

	// Functions to send a message
	const handleChange = (e) => {
		setMessageToSend(e.target.value);
	};

	const sendMessage = async () => {
		if (messageToSend) {
			const fullMessage = {
				chat: snap.currentChatId,
				user: snap.currentUserId,
				message: messageToSend,
			};

			await fetch('/api/message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify(fullMessage),
			});
			setMessageToSend('');
		}
	};

	useEffect(() => {
		// Get Chats
		const id = snap.currentChatId;
		getChat(id);

		// Listen for new messages
		socket.on(`${id}`, (data) => {
			setChatMessages((prevArray) => [...prevArray, data]);
		});
	}, [snap.currentChatId]);

	useEffect(() => {
		// Scroll to the bottom view
		scrollToBottom();
	}, [chatMessages]);

	// Redirection
	if (!snap.currentUserId) {
		return <Navigate to="/" />;
	}

	if (!snap.currentChatId) {
		return <Navigate to="/user" />;
	}

	return (
		<main className="w-full min-h-screen flex justify-center items-center md:text-2xl">
			<section className="card shadow rounded-none bg-white w-full md:w-4/5 md:rounded-2xl md:my-4 lg:px-12">
				<div className="card-body ">
					<GoBackButton />
					<h2 className="card-title">
						{chatInfo
							? chatInfo.users[0]._id === snap.currentUserId
								? chatInfo.users[1].name
								: chatInfo.users[0].name
							: null}
					</h2>
					{chatMessages &&
						chatMessages.map((message) => {
							return (
								<Message
									key={message._id}
									user={message.user.name}
									text={message.message}
									direction={
										message.user._id === snap.currentUserId ? 'right' : 'left'
									}
								/>
							);
						})}
					<TextInput
						value={messageToSend}
						onChange={(e) => handleChange(e)}
						onClick={() => sendMessage()}
						onKeyDown={(e) => handleEnter(e)}
					/>
				</div>
				<div ref={messagesEnd}></div>
			</section>
		</main>
	);
};

const Message = ({ user, text, direction }) => {
	if (direction === 'left') {
		return (
			<div
				style={{ width: 'fit-content' }}
				className="card shadow my-3 bg-base-100 "
			>
				<div className="card-body p-4 ">
					<h2 className="card-title md:text-2xl">{user}</h2>
					<p>{text}</p>
				</div>
			</div>
		);
	}

	return (
		<div
			style={{ width: 'fit-content' }}
			className="card shadow my-3 w-auto bg-primary md:w-1/2 self-end"
		>
			<div className="card-body text-right md:text-left p-4">
				<h2 className="card-title md:text-2xl">{user}</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};

const TextInput = ({ onChange, onClick, value, onKeyDown }) => {
	return (
		<div className="form-control mt-8 ">
			<div className="flex space-x-2 ">
				<input
					type="text"
					value={value}
					onChange={onChange}
					onKeyDown={onKeyDown}
					placeholder="Write something..."
					className="w-full input input-primary input-bordered md:text-2xl md:h-20 md:p-10 "
				/>
				<button
					className="btn btn-neutral md:w-64 md:h-20 md:text-2xl"
					onClick={onClick}
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default Chat;