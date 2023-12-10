// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// // import fetch from 'node-fetch';

// const app = express();
// const port = 5173;

// // Enable CORS
// app.use(cors());

// // Proxy endpoint
// app.get('/getLiqPrice', async (req, res) => {
//     try {
//         const response = await fetch(
//             'https://api.coinmarketcap.com/currencies/liquidus?convert=USD&CMC_PRO_API_KEY=345081cd-816a-4de5-8468-7bdbaecd2f2b&limit=1'
//         );
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.use(express.static(path.join(__dirname, 'dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });