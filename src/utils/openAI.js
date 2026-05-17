import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constant';
const client = new OpenAI({
    dangerouslyAllowBrowser: true
    , apiKey: OPEN_AI_KEY // This is the default and can be omitted
});

export default client;