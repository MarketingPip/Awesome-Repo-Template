import { pipeline } from "@xenova/transformers";

// Allocate a pipeline for sentiment-analysis
let pipe = await pipeline('sentiment-analysis');

let out = await pipe('I love transformers!');
