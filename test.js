import wtf from "https://cdn.skypack.dev/wtf_wikipedia@10.1.5";
import nlp from "https://cdn.skypack.dev/compromise@14.9.0";
import datePlugin from "https://cdn.skypack.dev/compromise-dates@3.4.1";

nlp.plugin(datePlugin);

import { removeStopwords } from "https://cdn.skypack.dev/stopword@2.0.8";

function clean(input) {
  // Check for "a " at the start of the string
  if (input.startsWith("a ")) {
    // If found, remove "a " and return the rest of the string
    return input.slice(2);
  }

  // Check for commas, periods, and question marks at the end of the string
  const punctuationRegex = /[,.?;]+$/;
  const cleanedInput = input.replace(punctuationRegex, "").trim();

  return cleanedInput;
}


async function extractEntities(question, extrainfo = false) {
  try {
    // Extract parts of speech and dates using compromise
    const doc = nlp(question);
    console.log(doc.places().out("array"))
    const nouns = doc.chunks()
    //console.log(nouns.out("json"))
    //const dates = doc.dates().get();
    
    // Fetch _type for each entity using wtf.fetch()
    const entities = [];

    for (let noun of nouns.out('array')) {
      
      
           
      
      let doc = nlp(noun)

     let dates = doc.dates().get()[0]   
      //console.log(noun)
     if(dates){
       entities.push({ name: noun, entity: "date", times:[{start:dates.start, end:dates.end, }] }); 
     } 

          let number = doc?.numbers()?.out("array")[0]

      
      
      
     
       if(number && number.length > 1){
           let knownAs = []
       let convert =  nlp(noun)  
       
         let cardinal;
    let Ordinal;

      // console.log(convert)
       if(convert.numbers().isCardinal().out("array")[0] && convert.out("json")[0]?.terms[0]?.tags.includes("Money") != true){
         Ordinal = convert?.numbers()?.toOrdinal()?.out("array")[0]  
       }
      
        if(!convert.numbers().isCardinal().out("array")[0]){
        cardinal = convert?.numbers()?.toCardinal()?.out("array")[0] 
       }  
         
    
      let toText = convert?.numbers()?.toText()?.out("array")[0]  
      
      let toNumber = convert?.values().numbers()?.out("array")[0]  
     
      toNumber = nlp(toNumber).numbers()?.toNumber()?.out("array")[0]  
      
         if(cardinal && cardinal != number ){
           knownAs.push(cardinal)
         }
         
         
        if(toText && toText.toLowerCase() != number.trim().toLowerCase()){
           knownAs.push(toText)
         }
         
        if(toNumber && toNumber.toLowerCase() != number.trim().toLowerCase() && toNumber != Ordinal ){
           knownAs.push(toNumber)
         }
         
         
         
            if(Ordinal && Ordinal.toLowerCase() != number.trim().toLowerCase() ){
           knownAs.push(Ordinal )
         }
         if(convert.out("json")[0]?.terms[0]?.tags.includes("Money") != true){
       number = { name: number, entity: "number",  knownAs: knownAs } 
         }
         
         if(convert.out("json")[0]?.terms[0]?.tags.includes("Money") === true){
       number = { name: number, entity: "currency",  knownAs: knownAs }
         }
         
      }
      
    
      
      
      let phoneNumber = doc?.phoneNumbers()?.out("array")[0]  
      
      let email = doc?.emails()?.out("array")[0] 
      
      let url = doc?.urls()?.out("array")[0] 
  
      if(phoneNumber){
       entities.push({ name: phoneNumber, entity: "phoneNumber" });  
      }
      
       if(email){
       entities.push({ name: email, entity: "email" });  
      }
      
       if(url){
       entities.push({ name: url, entity: "url" });  
      }
      
        let types = "d"
      
      
       let people = doc?.people()?.out("array")[0] 
       if(doc?.people()?.out("json")[0]?.terms.length > 1){
             
     
      if(people){   
       people = { name: people, entity: "person" }
      }
       }

        if(doc?.people()?.out("json")[0]?.terms.length === 1 || doc?.people()?.out("json")[0]?.terms === undefined){
          
          let firstName = doc?.match("#FirstName")?.out("array")[0]
          
            if(firstName && types != "given name"){   
       people = { name: firstName, entity: "given name" }
      }
          
        }
        
        
      
      
      
      
      
      noun = clean(noun)
      const text = removeStopwords(noun.split(' ')).join(" ");
      let fetchResult = null;
      if (text) {
        fetchResult = await wtf.fetch(text);
       
        // If no infobox found, try adding "the" to the noun and fetch again
        if (!fetchResult?.infobox() && noun.toLowerCase().startsWith("the") && !text.toLowerCase().startsWith("the")) {
          fetchResult = await wtf.fetch(`the ${text}`);
        }
      }
     // console.log(text)
     // console.log(fetchResult?.infobox())
      const birthName = fetchResult?.infobox()?.data?.birth_name?.text();
      const description = fetchResult?._options?.description;
      const type = fetchResult?.infobox()?._type;
      const title = fetchResult?._options?.title;
      let alsoKnownAs = [];
      
      const drugName = fetchResult?.infobox()?.data?.drug_name?.text();


      let synonyms  = fetchResult?.infobox()?.data?.synonyms?.text()
      if(synonyms){
      let symn = synonyms 
      synonyms = nlp(synonyms).chunks().out("array")
       if(synonyms.length == 1 || synonyms.length == 0){
         synonyms = nlp(symn).nouns().out("array")
       }
      for(let word in synonyms){
        let symns = clean(synonyms[word])
        if(!symns.includes("others") && noun.toLowerCase() !=  symns.toLowerCase()){
        alsoKnownAs.push(symns)
        }
      }  
       
      }
    

      
      if (title && noun.toLowerCase() !== title.toLowerCase()) {
        alsoKnownAs.push(title);
      }

      if (birthName && noun.toLowerCase() !== birthName.toLowerCase()) {
        alsoKnownAs.push(birthName);
      }
      
        if (drugName && noun.toLowerCase() !== drugName.toLowerCase()) {
        alsoKnownAs.push(drugName);
      }

      let queryID;
      
      if(extrainfo != false){
        queryID = fetchResult?._options?.wikidata;
      }
      
      if (type) {
        entities.push({ name: noun, entity: type, alsoKnownAs, description, queryID });
      }
      
      if(type != "person" && type != "given name" && people){
        
        entities.push(people)
      }
    
      
        if(number && type != "number"){
        
        entities.push(number)
        }
    
      

      
        if (!type && description && description != "Topics referred to by the same term" && extrainfo != false) {
        entities.push({ name: noun, entity: title, alsoKnownAs, description,  queryID});
      }
      
    }
    
 

    // Return the extracted entities
    return { entities };
  } catch (error) {
    console.error('Error while extracting entities:', error.message);
    return { entities: [] };
  }
}

// Example usage:
const inputQuestion = `I love dogs`;
const extractedEntities = await extractEntities(inputQuestion, true);
console.log(extractedEntities);
