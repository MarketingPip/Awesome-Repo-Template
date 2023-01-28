import { containerBootstrap } from "https://cdn.skypack.dev/@nlpjs/core@4.26.1";
import { Nlp } from "https://cdn.skypack.dev/@nlpjs/nlp@4.26.1";
import { LangEn } from "https://cdn.skypack.dev/@nlpjs/lang-en-min@4.26.1";

(async () => {
  const container = await containerBootstrap();
  container.use(Nlp);
  container.use(LangEn);
  const nlp = container.get('nlp');
  nlp.settings.autoSave = false;
  nlp.addLanguage('en');
  // Adds the utterances and intents for the NLP;
  nlp.addDocument('en', 'fixed a bug', 'greetings.bye');
  nlp.addDocument('en', 'bug', 'greetings.bye');
  nlp.addDocument('en', 'test', 'greetings.hello');
  nlp.addDocument('en', 'hi', 'greetings.hello');
  nlp.addDocument('en', 'howdy', 'greetings.hello');
  
  // Train also the NLG
  nlp.addAnswer('en', 'greetings.bye', 'Till next time');
  nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
  nlp.addAnswer('en', 'greetings.hello', 'Hey there!');
  nlp.addAnswer('en', 'greetings.hello', 'Greetings!');
  await nlp.train();
  const response = await nlp.process('en', 'I had a bug i fixed for a test');
  console.log(response.answer);
})();
