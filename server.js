import express from 'express'

const app = express();
app.get("/api/categories", (req,res)=>{

    const prepareResponse={categories:[
        {title:"Prayer Times Silent", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/p-time-silent.png?alt=media&token=745072f5-a643-4b96-87b9-9945a9cadfde"},
        {title:"Audio Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/audio-book.png?alt=media&token=03c5d83a-f60b-463d-84ef-9a97d36a67a7"},
        {title:"All Language Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
        {title:"99 Names of Allah", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/allah.png?alt=media&token=340256b1-1dbb-4582-ad2e-2bd0e292c230"},
        {title:"Duas", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/2%20(1).png?alt=media&token=d1bcac61-f5ed-408b-b9e0-a1de07069fd9"},
        {title:"Tasbih", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
        {title:"Islamic Gallery", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
        {title:"Masjid Nearby", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
        {title:"Qibla Direction", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
    ]}
res.json(prepareResponse);
})

app.listen(3060, ()=>{console.log("app listening at 3000")});
