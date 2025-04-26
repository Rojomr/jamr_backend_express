const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());
app.get('/usuario',function(req,res){
    res.json({
        primernombre:"jose",
        segundonombre:"Alejandro",
        primerapellido:"Montenegro",
        segundoApellido:"Ruiz",
        fechadenacimiento:"2001-03-01",
        estadofamiliar:"sotero y faliz",
        residencia:"san salvador",
        profecion:"Ing en ciber seguridad",
        estatura:"1.66",
        peso:"220",
        colorpiel:"trigueño",
        colorojo:"cafes",
        colorcabello:"rojo",
        ultimosempleos:[{
            empresa: "hans brans S.A. DE C.V.",
            DEPARTAMENTO:"IT",
            DIRECION:"LA LIBERTAD",
            CORGO:"EN CARGADO DEL ARRIA DE CNC Y PROCESOS",
            DESDE: "2024-01-01",
            HASTA: "2025-01-01",
        },{
            empresa: "hans brans S.A. DE C.V.",
            DEPARTAMENTO:"IT",
            DIRECION:"LA LIBERTAD",
            CORGO:"EN CARGADO DEL ARRIA DE CNC Y PROCESOS",
            DESDE: "2024-01-01",
            HASTA: "2025-01-01",
        },{
            empresa: "hans brans S.A. DE C.V.",
            DEPARTAMENTO:"IT",
            DIRECION:"LA LIBERTAD",
            CORGO:"EN CARGADO DEL ARRIA DE CNC Y PROCESOS",
            DESDE: "2024-01-01",
            HASTA: "2025-01-01",
        },{
            empresa: "hans brans S.A. DE C.V.",
            DEPARTAMENTO:"IT",
            DIRECION:"LA LIBERTAD",
            CORGO:"EN CARGADO DEL ARRIA DE CNC Y PROCESOS",
            DESDE: "2024-01-01",
            HASTA: "2025-01-01",
        }]
    })
});
app.get('/genero',function(req,res){
    res.json([
        {id:1,genero:"masculino"},
        {id:1,genero:"Femenino"},
    ]);
});

app.get('/dipo_documento',function(req,res){
    res.json([
        {id:1,tipo_documento:'DUI'},
        {id:2,tipo_documento:'NIT'},
        {id:3,tipo_documento:'ISSS'},
        {id:4,tipo_documento:'PASAPORTE'}
    ]);
});
app.get('/departamento',function(req,res){
    res.json([
        {id:1,departamentos:"Ahuachapán"},
        {id:2,departamentos:"Santa Ana"},
        {id:3,departamentos:"Sonsonate"},
        {id:4,departamentos:"La Libertad"},
        {id:5,departamentos:"San Salvador"},
        {id:6,departamentos:"Chalatenago"},
        {id:7,departamentos:"Cuscaclá"},
        {id:8,departamentos:"Cabañas"},
        {id:9,departamentos:"La paz"},
        {id:10,departamentos:"San Vicente"},
        {id:11,departamentos:"Usulutan"},
        {id:12,departamentos:"San miguel"},
        {id:13,departamentos:"Morazon"},
        {id:14,departamentos:"La Union"}
    ]);
});
app.get('/municipio',function(req,res){
    res.json([
        {id:1,municipio:"Ahuachapán"},
        {id:2,municipio:"Santa Ana"},
        {id:3,municipio:"Izalco"},
        {id:4,municipio:"Santa Tecla"},
        {id:5,municipio:"Soyapango"},
        {id:6,municipio:"Las Pilas"},
        {id:7,municipio:"Cojutepeque"},
        {id:8,municipio:"Ilobasco"},
        {id:9,municipio:"Olocuilta"},
        {id:10,municipio:"Apastepeque"},
        {id:11,municipio:"Jucuapa"},
        {id:12,municipio:"El triunfo"},
        {id:13,municipio:"sociedad"},
        {id:14,municipio:"San alejo"},
    ]);
});
//get http://www.algo.com/sumar?campo1=3
app.get('/sumar',function(req,res){
    let resultado = parseFloat(req.query.campo1)+parseFloat(req.query.campo2);
    res.json({
        respuesta:resultado
    });
});
app.get ('/login',function(req,res){
    console.log(req.query.email);
    console.log(req.query.password);
});
app.listen(puerto,function(req,res){
    console.log("EL SERVICIO ESTA CORIENDO EN EL PUERTO NO.3000");
});