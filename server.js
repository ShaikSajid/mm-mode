import express from 'express'

const app = express();
app.get("/api/categories", (req,res)=>{

    const prepareResponse={categories:[
        {title:"Prayer Times Silent", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/p-time-silent.png?alt=media&token=745072f5-a643-4b96-87b9-9945a9cadfde"},
        {title:"Audio Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/audio-quran.png?alt=media&token=0c51d220-ddb1-4095-906d-e61c821865ba"},
        {title:"All Language Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/all-lang-quran.png?alt=media&token=29e3d3a8-3224-474a-8f86-a2be2f204c84"},
        {title:"99 Names of Allah", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/99-names.png?alt=media&token=5b556ac2-ed4b-4276-b362-03937fe28c59"},
        {title:"Duas", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/duas.png?alt=media&token=da941575-1879-477f-82cd-03084e309376"},
        {title:"Tasbih", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/zikar.png?alt=media&token=d59ac6a1-139e-413a-97e1-f88a3668b716"},
        {title:"Islamic Gallery", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/gallery.png?alt=media&token=2fd5fdd7-9890-4a42-949f-a2f72f6abac7"},
        {title:"Masjid Nearby", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/nearest-masjid.png?alt=media&token=c15f07c5-4528-4469-b403-2d0ab637d5b3"},
        {title:"Qibla Direction", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
    ]}
res.json(prepareResponse);
});

app.get("/api/duas", (req,res)=>{

    const prepareResponse={categories:[
        {title:"Prayer Times Silent", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/p-time-silent.png?alt=media&token=745072f5-a643-4b96-87b9-9945a9cadfde"},
        {title:"Audio Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/audio-quran.png?alt=media&token=0c51d220-ddb1-4095-906d-e61c821865ba"},
        {title:"All Language Quran", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/all-lang-quran.png?alt=media&token=29e3d3a8-3224-474a-8f86-a2be2f204c84"},
        {title:"99 Names of Allah", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/99-names.png?alt=media&token=5b556ac2-ed4b-4276-b362-03937fe28c59"},
        {title:"Duas", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/duas.png?alt=media&token=da941575-1879-477f-82cd-03084e309376"},
        {title:"Tasbih", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/zikar.png?alt=media&token=d59ac6a1-139e-413a-97e1-f88a3668b716"},
        {title:"Islamic Gallery", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/gallery.png?alt=media&token=2fd5fdd7-9890-4a42-949f-a2f72f6abac7"},
        {title:"Masjid Nearby", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/nearest-masjid.png?alt=media&token=c15f07c5-4528-4469-b403-2d0ab637d5b3"},
        {title:"Qibla Direction", image:"https://firebasestorage.googleapis.com/v0/b/masjid-mode-data.appspot.com/o/quran.png?alt=media&token=19fe3db2-67fb-4142-9107-9c993faf8c05"},
    ]}
res.json(prepareResponse);
});


app.listen(3060, ()=>{console.log("app listening at 3000")});
