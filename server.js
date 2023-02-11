import express from 'express'

const app = express();
app.get("/api/categories", (req,res)=>{

    const prepareResponse=[
        {title:"Prayer Times Silent", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/silent.png?alt=media&token=b75c1595-2b9e-480d-a080-aa23a178ac0b"},
        {title:"Audio Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/audio-book.png?alt=media&token=03c5d83a-f60b-463d-84ef-9a97d36a67a7"},
        {title:"All Language Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
        {title:"99 Names of Allah", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
    ]
res.json(prepareResponse);
})

app.listen(3060, ()=>{console.log("app listening at 3000")});
