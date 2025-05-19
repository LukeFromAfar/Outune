import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    // Set content type to HTML
    res.setHeader('Content-Type', 'text/html');
    
    // The redirect URL
    const redirectUrl = `${process.env.FRONTEND_DOMAIN}:${process.env.FRONTEND_PORT}`;
    
    // Simple HTML with the message and delayed redirect
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Outune API</title>
            <script>
                setTimeout(() => {
                    window.location.href = "${redirectUrl}";
                }, 3000);
            </script>
        </head>
        <body>
            Welcome to Outune API. You will be redirected to the frontend in a few seconds.
        </body>
        </html>
    `;
    
    // Send HTML response
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running and connected on port ${PORT}`)
})