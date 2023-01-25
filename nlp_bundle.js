import "https://polyfill.io/v3/polyfill.min.js?features=console" // POLYFILLS NEEDED.
import core from "https://cdn.skypack.dev/@nlpjs/core@4.26.1";
import nlp from "https://cdn.skypack.dev/@nlpjs/nlp@4.26.1";
import langenmin from "https://cdn.skypack.dev/@nlpjs/lang-en-min@4.26.1";
import requestrn from "https://cdn.skypack.dev/@nlpjs/request-rn@4.25.0";
    // Termino.js - Terminal App Demo (Basic)
import {Termino} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/Termino.js@v1.0.0/dist/termino.min.js';
     
 import {fetch_tmdb_info, tmdb_api_key} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/TheMovieDB-API-Wrapper.js/dist/themoviedb-api-wrapper.min.js' 




window.nlpjs = { ...core, ...nlp, ...langenmin, ...requestrn };



tmdb_api_key("PUT YOUR TMDB KEY HERE")

     
    

function SearchInput(input, option, option2){
  
  // Used to set reviews / similar etc.. 
  if (option2 != "movie" && option2 != "tv"){
    option2 = 2 // Max actors to return.. 
  } else{
    option2 = option2
  }
   
let t= fetch_tmdb_info(input, option,  option2).then(function(search_results) {  
 // console.log(search_results)
 if(search_results.tmdb_api_error){
   return search_results.tmdb_api_error
  }
  
  
  
  let genres = [];  
  let actors = []; 
  let appears_in = []
  let resp = [];
  
  
  function getActorsAndGenres(){
    for(const name in search_results[0][0].genres){
     genres += `${search_results[0][0].genres[name].name},`
   }    
  
  
    for(const names in search_results[1]){
     if(search_results[1][names].name != "undefined"){
     actors += search_results[1][names].name
     } 
   }    
  }
  
  if (option == "movie"){
   
      return(`
 ${search_results[0][0].title}  on TMDb:
 
  Duration: .... ${search_results[0][0].runtime}
  Stars: ....... ${search_results[0][0].overview}
  Genre: ....... ${actors}
  Plot: ... ${search_results[0][0].overview}`)
  }

  if(option == "similar"){  
    if(option2 != "tv"){
     for (const known_fors in search_results.results){
    resp += `${search_results.results[known_fors].title + search_results.results[known_fors].release_date.split("-")[0]}<br>`
       
     } 
    }else{
        for (const known_fors in search_results.results){
    resp += `${search_results.results[known_fors].name + search_results.results[known_fors].first_air_date.split("-")[0]}<br>`
        }
    } 

    return  `
Similar ${option2} on TMDb:
 
Results.... 
${resp}
 
`
  }
  
   
  if(option == "reviews"){  
     for(const review in search_results.results){
      
      resp += `Author.....  ${search_results.results[review].author}
Rating.....  ${search_results.results[review].author_details.rating}
Review.....  ${search_results.results[review].content}`
    }
    return resp //
  }
  
   
  if(option == "collection"){   
      return(`Author.....  ${search_results[0].name}
Rating.....  ${search_results[0].overview}
Review.....  ${search_results[0].poster_path}`)
    
    
   
   
  } 
  
  if (option == "tv"){
    
    getActorsAndGenres()
    
    
        return(`
 ${search_results[0][0].name}  on TMDb:
  
  Seasons: .... ${search_results[0][0].number_of_seasons}
  Stars: ....... ${actors}
  Genre: ....... ${genres}
  Plot: ... ${search_results[0][0].overview}`)
  }
  
  if (option == "actor"){
    for (const known_for in search_results[0].known_for){
      appears_in += search_results[0].known_for[known_for].title + ` (${search_results[0].known_for[known_for].release_date.split("-")[0]})`
    }
     t =  `
 ${search_results[0].name}  on TMDb:
 
 Appears in.... 
 ${appears_in}
 
`
     return t
  }
   
  
  
  });
  return t
}
    
const {containerBootstrap, Nlp, LangEn, fs} = window.nlpjs;
          
        function User_MSG(msg){
          return `<div class="d-flex justify-content-end">
      <div class="card mb-3">
        <div class="card-body user-card-body">
          <p class="card-text">${msg}</p>
        </div>
      </div>
      </div>
      `
        }
     
     
        function Bot_MSG(message, type){
          
          if (type == "output"){
            type = term2.output
          } else{
            type = term2.input
          }
           return type(`<div class="d-flex justify-content-start">
        <div class="card mb-3">
          <div class="card-body bot-card-body">
            <p class="card-text">${message}</p>
          </div>
        </div>
      </div>
      `)  
     
        }
          
     // GREETING INTENT FUNCTIONS
     
     var greetings = {
  hello: async function() {
     
    /// FUNCTION TO SEARCH TMDB    
     let tt = await Bot_MSG(`What do you want to search? <br>
              1. <button id="btn">fd</button>Movie
              2. Actor
              3. Movie Collection
              4. TV Show
              5. TV / Movie Reviews
              7. Similar movie`)   
     
     
     let functions = ["movie", "actor", "reviews", "tv shows", "collection", "similar"]
     
      for (const option in functions){
            if (tt.toLowerCase() === functions[option]) { 

            let search_input = await Bot_MSG(`What name do you want to search for ${functions[option]} details?`)  
             
              let results; 
           
              
              
              if (tt.toLowerCase() == "tv shows"){
                results =  await SearchInput(search_input, "tv")
              } else{
                
                 if (tt.toLowerCase() == "similar"){
                 results = await Bot_MSG(`Is this title a TV show or Movie?`)  
                     if (results != "movie" && results != "tv"){
                       Bot_MSG("Invalid option chosen, you must choose a valid option provided!", "output")
    return 
  }
                   
                results =  await SearchInput(search_input, "similar",  results)
              }
                
                
                 if (functions[option] == "reviews"){
                 results = await Bot_MSG(`Is this title a TV show or Movie?`)   
                     if (results != "movie" && results != "tv"){
                       Bot_MSG("Invalid option chosen, you must choose a valid option provided!", "output")
    return 
  }
                   
                results =  await SearchInput(search_input, "reviews", results)
              } 
                
          if (tt.toLowerCase() != "reviews" && tt.toLowerCase() != "similar"){ 
               
              results =  await SearchInput(search_input, functions[option])
              }
              }
               
             Bot_MSG("Just a moment while I search for that!", "output")
              
              
          await term2.delay(results)
           
             if (results == "No results found"){
               // Title is not real / or not found...
               Bot_MSG(`No results found for ${search_input}`, "output")
                return;
             } else{ 
               if(results.includes("Invalid API")){
                 Bot_MSG(`Error: ${results}`, "output")
               }else{
               /// Collect data possibly - title is REAL etc..
                Bot_MSG(`Here are the results for ${tt}: ${results}`, "output")
               }
                return;
             }     
             
           } 
           
         }
            Bot_MSG("Invalid option chosen, you must choose a valid option provided!", "output")
    
   
  },
  hellos: function (){
     /// FUNCTION TO SAY HELLO BASED ON HOUR OF DAY.
        const hours = new Date().getHours();
          let answer;
                if(hours < 12) {
                    answer = 'Good morning!';
                } else if(hours < 17) {
                    answer = 'Good afternoon!';
                } else {
                    answer = 'Good evening!';
                }
    return answer
     },
   searchGitHubProfile: async function SearchGitHubProfile() {


try {

let username = await Bot_MSG("What profile would you like to search?")
if (!username) {
throw {
message: "No username was provided"
}
}
const response = await fetch(`https://api.github.com/users/${username}`)
let data = await response.json();
if (data.login === undefined) {
throw {
message: "profile was not found"
}
}

Bot_MSG(`You searched for: ${data.login}, they have ${data.followers} followers, & ${data.public_repos} public repos`, "output")
} catch (error) {
  Bot_MSG(`Failed to get github info ${error.message}`, "output")

}

return;

}
    
};
     
  
     
        async function onIntent(nlp, input) {
           
           const output = input; 
           if (input.intent === 'None') {
            output.answer = 'I am not sure what you mean by that'
             
             // If no response was found - we could send the input to a API to store the input to make new responses (manually) & improve the chatbot!
           }
          
          
          
           // Handle your custom functions with Termino.JS on ChatBot intents here! 
          
          let functions = ['greetings.hello', 'search.github']
          
          for (const option in functions){
            if (input.intent === functions[option]) {  
              output.answer = await eval(functions[option] + "()")  
            }
          } 
            if (output.answer != undefined){
            Bot_MSG(output.answer, "output");
              return input;
            }
            
        }

        const setupNLP = async corpus => {
            const container = containerBootstrap();
            container.register('fs', fs);
            container.use(Nlp);
            container.use(LangEn);
            const nlp = container.get('nlp');
            nlp.onIntent = onIntent;
            nlp.settings.autoSave = false;
            await nlp.addCorpus(corpus);
            nlp.train();
            return nlp;
        };
               // This is where all the responses for chatbot come from! We wil make own corpus data to fit the chat bot needs! 
            const nlp = await setupNLP('https://raw.githubusercontent.com/jesus-seijas-sp/nlpjs-examples/master/01.quickstart/05.consoleconnector/corpus-en.json');
 
    
// initialize a Terminal via Termino.js
let term2 = Termino(document.getElementById("Example_Terminal_2"))


  
 
async function basicTerminalApp() {

// call Termino.js / your terminal for inital input
let term2value = await term2.input("")


            const response = await nlp.process('en', term2value);
       
   const entities = await nlp.extractEntities(
    'I should go now'
  );
 
  console.log(entities);
  //  NEED TO FIGURE OUT FIX FOR CSS / SCROLL TO BOTTOM - BOOTSTRAP ISSUE - TERMINO.JS HAS BUILT IT SCROLL TO BOTTOM ON COMMANDS.
  window.scrollTo(0, document.body.scrollHeight);
  
// repeat
setTimeout(basicTerminalApp, term2value)


}

basicTerminalApp()
