// export const BeURL = 'http://localhost:3000/';
export const BeURL = 'https://manga-reader-be.herokuapp.com/';

export const scaperURL = 'https://manga-reader-express.herokuapp.com/'
// export const scaperURL= 'http://localhost:4000/';
let currentUrl = window.location.href;

// export const scaperURL = currentUrl.indexOf('github.io') !== -1 ? 'https://manga-reader-express.herokuapp.com/': 'http://localhost:4000/';



export const prodBool = currentUrl.indexOf('github.io') !== -1 ? false : true;

export const version = "v1.25";


export const defaultSRC = 'MGFX';


export const getSourceFromCode = function(code){
    if(code === 'MGPK'){
      return 'MangaPark'
    }else if(code === 'MGFX'){
        return 'MangaFox'
    }else if(code === 'MGDX'){
      return 'MangaDex'
    }else if(code === 'MGHR'){
      return 'MangaHere'
    }else if(code === 'RCO'){
      return 'ReadComicsOnline'
    }else{
      return 'Unknown Source'
    }
}

export const getsrcFromUrl = function(){
  //UPDATE THIS WITH SOURCES
  let currentUrl = window.location.href;
  if(currentUrl.indexOf('mangapark.net') !== -1 ){
    return "MGPK";
  }else if(currentUrl.indexOf('fanfox.net') !== -1 ){
    return "MGFX";
  }else if(currentUrl.indexOf('mangadex') !== -1 ){
    return "MGDX";
  }else if(currentUrl.indexOf('mangahere') !== -1 ){
    return "MGHR";
  }else if(currentUrl.indexOf('readcomiconline') !== -1 ){
    return "RCO";
  }
}



