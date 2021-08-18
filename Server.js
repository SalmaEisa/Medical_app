
const express = require('express');
const app = express();
const port=process.env.PORT || 3000;


const users=[{
    PatientID:'205875',
    name: 'Nicole Walton',
    age: 35,
    gender: 'Male',
    weight:65,
    height:179,
    insurance: 'Daman' ,
    bloodType: 'A',
    allergies: ['peanuts'],
    problems:['Diabetes, ', 'Hypertention']
},
{
    PatientID:'986632',
    name: 'John Doe',
    age: 69,
    gender: 'Male',
    weight:78,
    height:165,
    insurance: 'AXA' ,
    bloodType: 'O',
    allergies: ['Eggs'],
    problems:['Cancer']
}];


app.get('/userInfo',(req,res)=>{
    res.send(users);});
        
        
app.get('/userInfo/:PatientID',(req,res)=>{
    const user= users.find(u=>u.PatientID === req.params.PatientID);
    if(!user) res.status(404).send('the patient with the given ID was not found.')
    res.send(user);
});


const prescriptions=[
    {
        PatientID:'205875',
        prescs:[{
        id:'1',
        Date: '2018-11-10',
        MedName: 'Ibuprofen',
        Dose: 'Tablet',
        frequency:'1x per day',
        Duration:'3 month'
    },
    {
        id:'2',
        Date: '2018-02-15',
        MedName: 'Diuretics',
        Dose: '20 mg',
        frequency:'1x per day',
        Duration:'2 weeks'
    }]
},
{   
        PatientID:'986632',
        prescs:[{
        id:'1',
        Date: '2018-07-10',
        MedName: 'Neulasta',
        Dose: '6 mg',
        frequency:'2x per day',
        Duration:'2 months',
        },
        {
        id:'2',
        Date: '2018-05-10',
        MedName: 'Ibrance',
        Dose: '125 mg',
        frequency:'1x per day',
        Duration:'1 month' ,
         }]
}
];

app.get('/prescriptions',(req,res)=>{
    res.send(prescriptions);});
        
        
app.get('/prescriptions/:PatientID',(req,res)=>{
    const prescription= prescriptions.find(p=>p.PatientID === req.params.PatientID);
    if(!prescription) res.status(404).send('the patient with the given ID was not found.')
    res.send(prescription);
});


const docNotes=[
    {
        PatientID:'205875',
        notes:[{
        id:'1',
        Date: '2017-08-20',
        docName: 'Sara Eisa',
        Notes: 'blood sugar is 356. \nSevere upper lung crud. \npatient has type II diabetes and must follow medication, diet, and exercise'
    },
    {
        id:'2',
        Date: '2019-05-12',
        docName: 'Marvin Dan',
        Notes: 'patient has symptoms of cardiovascular and neurological complications of diabete',
    },
    {
        id:'3',
        Date: '2020-11-20',
        docName: 'Mark Erikson',
        Notes: 'normal blood levels.',
    }]
},
{   
        PatientID:'986632',
        notes:[{
            id:'1',
            Date: '2020-01-15',
            docName: 'Ahmad Raslan',
            Notes: 'Patient suffer from fatigue, fever, changes in your skin, and Weight loss.'
        },
        {
            id:'2',
            Date: '2020-07-10',
            docName: 'Khalid Khazala',
            Notes: 'patient has headache and sores.',
        }]
    }
];

app.get('/docNotes',(req,res)=>{
    res.send(docNotes);});
        
        
app.get('/docNotes/:PatientID',(req,res)=>{
    const docNote= docNotes.find(n=>n.PatientID === req.params.PatientID);
    if(!docNote) res.status(404).send('the patient with the given ID was not found.')
    res.send(docNote);
});



const appointments=[{
    PatientID:'205875',
    Type: 'Eye Doctor',
    Doctor: 'khalid Raslan',
    Date: '2021-08-15',
    Time:'12:00 am'
},
{
    PatientID:'986632',
    Type: 'physiotherapy',
    Doctor: 'john melan',
    Date: '2021-10-30',
    Time:'9:00 am'
}];


app.get('/appointments',(req,res)=>{
    res.send(users);});
        
        
app.get('/appointments/:PatientID',(req,res)=>{
    const appointment= appointments.find(a=>a.PatientID === req.params.PatientID);
    if(!appointment) res.status(404).send('the patient with the given ID was not found.')
    res.send(appointment);
});


app.listen(port);
