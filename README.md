# Medical RAG

Copy the repo to your PC.
In the terminal write:
javascript
```
npm install
npm start
```

Next from Gemini AI studio make your API key and copy it.
In 127.0.0.1:3000/home your site will ask for the key paste it, then try giving symptoms it will generate the Prescription.

## Working and Explanation.
RAG (Retrieval Augmented Generation) is a technique that let our LLM able to bridge the knowledge gap between the time of training and actual working.

As, we know LLM's are excellent at getting the structure and context of sentence correctly. So, instead of regularly training the LLM we can compensate the procedure using the knowledge that we already have.
Such that it augments the context with its own internal inference so it can answer specific questions related to that context.

Further development in RAG has produced CAG that is context augmented generation where instead of giving just the bulky data, we compress it by generating the miniature context of the content which is stored in vector databases for future inferencing.
