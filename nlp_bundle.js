import core from "https://cdn.skypack.dev/@nlpjs/core@4.26.1";
import nlp from "https://cdn.skypack.dev/@nlpjs/nlp@4.26.1";
import langenmin from "https://cdn.skypack.dev/@nlpjs/lang-en-min@4.26.1";
import requestrn from "https://cdn.skypack.dev/@nlpjs/request-rn@4.25.0";

window.nlpjs = { ...core, ...nlp, ...langenmin, ...requestrn };
