import app from './app.js'

const engineDB = process.env.ENGINE_DB;

if (engineDB === 'noSQL') {
    import('./config/mongo.js')
} else {
    import('./config/postgress.js')
}

//! Importante: En este proyecto se cargo dotenv EN EL SCRIPT npm run start:dev por 
//! problemas de alcance al hacerlo dentro del archivo

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))