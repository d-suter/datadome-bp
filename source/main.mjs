import express from 'express';
import cors from 'cors';
import settings from './settings.mjs';
import { generateSecureCookie } from './CookieGenerator.mjs';

const server = express();

async function startServer() {
  try {
    console.log('Attempting to start the server...');

    server.use(cors());
    console.log('CORS middleware configured.');

    server.use(express.json());
    console.log('Express JSON middleware configured.');

    const SERVER_PORT = settings.SERVER_PORT || 3000;
    console.log(`Server port configured to ${SERVER_PORT}.`);

    server.post('/cookie-generator', async (req, res) => {
      console.log('Received request to /cookie-generator endpoint.');
      
      const inputData = req.body;
      if (!inputData || !inputData.targetDomain) {
        console.warn('Invalid or incomplete request parameters received.');
        return res.status(400).send('Error - Incomplete Request Parameters');
      }

      const targetDomain = inputData.targetDomain;
      console.log(`Processing request for target domain: ${targetDomain}`);

      try {
        const generatedCookie = await generateSecureCookie(targetDomain);
        console.log(`Successfully created a cookie for ${targetDomain}`);
        return res.status(200).send(generatedCookie);
      } catch (error) {
        console.error(`Error in creating cookie for ${targetDomain}: `, error);
        return res.status(400).send(`Error in creating cookie for ${targetDomain}`);
      }
    });

    server.listen(SERVER_PORT, () => console.log(`Service is active @ http://localhost:${SERVER_PORT}/cookie-generator`));
  } catch (error) {
    console.error('Error occurred while starting the server: ', error);
  }
}

export { startServer };
startServer();
