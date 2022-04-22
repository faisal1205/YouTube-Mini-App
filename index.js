// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf2&key=[YOUR_API_KEY]'
//api key from google utube -- AIzaSyB0FYP9ENSoBpDPRW7x8KNu9udEnKuc4Nw
const api = "AIzaSyB0FYP9ENSoBpDPRW7x8KNu9udEnKuc4Nw"
//let url ='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf2&key=AIzaSyB0FYP9ENSoBpDPRW7x8KNu9udEnKuc4Nw'



const seachVideos = async () => 
{
    try{
      const q = document.getElementById("query").value

      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}2&key=${api}`)
  
      const data = await res.json()
      appned(data.items)
      console.log(data.items)
    }
    catch(err)
    {
        console.log(err)
    }
}

const appned = (videos) => 
{
    let showVideos = document.getElementById("showVideos")
    
showVideos.innerHTML = null

videos.forEach(({id: {videoId} , snippet: {title} }) => {

        let Div = document.createElement("div");

  let iframe  = document.createElement("iframe") 
  iframe.src = `https://www.youtube.com/embed/${videoId}`
  iframe.width = "100%"
  iframe.height = "100%"
  iframe.allow = "fullscreen";

  let name = document.createElement("h5")
  name.innerText = title

  Div.append(iframe,name)
  let data ={
      title,      //this consider same as key and value also
      videoId,
  }

  Div.onclick = () => {
    videoPage(data)
   
  }

  showVideos.append(Div)
    })
}

const videoPage = (x) =>
{
   window.location.href = "video.html"
   localStorage.setItem("video",JSON.stringify(x))
}

//for defaul videos top trending videos
let url2 ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=AIzaSyB0FYP9ENSoBpDPRW7x8KNu9udEnKuc4Nw"


fetch(url2)
.then(function(res){
return res.json()
})
.then(function(res)
{
   appendTrending(res.items)
    console.log(res.items)

})
.catch(function(err)
{
    console.log(err)
})

const appendTrending = (data) => 
{
    let showVideos = document.getElementById("showVideos")
    
showVideos.innerHTML = null

data.forEach(({id , snippet: {title} }) => {

        let Div = document.createElement("div");

  let iframe  = document.createElement("iframe") 
  iframe.src = `https://www.youtube.com/embed/${id}`
  iframe.width = "100%"
  iframe.height = "100%"
  iframe.allow = "fullscreen";

  let name = document.createElement("h5")
  name.innerText = title
  
  Div.append(iframe,name)

  showVideos.append(Div)
});
}
