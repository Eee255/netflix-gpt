import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies :null,
        trailerVideos : null,
        topRatedMovies:null,
        popularMovies : null,
        upCommingMovies:null,
        mainVideo:null,
        video:false
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload ;
        },
        addTrailers: (state,action) =>{
            state.trailerVideos = action.payload
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies = action.payload
        },
        addUpCommingMovies : (state,action) =>{
            state.upCommingMovies = action.payload
        },
        addMainVideo : (state,action) =>{
            state.mainVideo = action.payload
        },
        toggleVideo : (state,action) =>{
           state.video =  !state.video
        } 
    }
})

export const {addNowPlayingMovies,addTrailers,addTopRatedMovies,addPopularMovies,addUpCommingMovies,addMainVideo,toggleVideo} = moviesSlice.actions
export default moviesSlice.reducer