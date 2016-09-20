// Programme pour lire le fichier JSON et le convertir en objet Javascript

var fs = require('fs');

function convert_to_obj() {
   var promise = readJSONFile(process.cwd() + "\/global_enum.json"); //process.cwd() renvoie le chemin par défaut (C:\.. blablabla)
   promise.then(function (result) {
      alert(result.name);
   });
};

function readJSONFile(dir) {
   //On utilise une promise pour que le script execute les instructions seulement après avoir lu le fichier.
   var promise = new Promise(function (resolve, reject) {
      fs.readFile(dir, function (err, data) {
         if (err) {
            alert(err);
            reject(data);
         } else {
            resolve(JSON.parse(data));
         }
      });
   
   });
   return promise;
};

console.log(convert_to_obj());
// Renvoie undefined.. Pourquoi ?


// Programme pour transformer un objet Javascript en sa notation JSON
// Non optionnel pour plusieurs objets dans un seul document

var fs = require('fs');

function convert_to_json() {
   var promise = readJSFile(process.cwd() + "\\global_schema.js");
   promise.then(function (result) {
      alert(result.name);
   });
};

function readJSFile(dir) {
   var promise = new Promise(function (resolve, reject) {
      fs.readFile(dir, function (err, data) {
         if (err) {
            alert(err);
            reject(data);
         } else {
            resolve(JSON.stringify(data));
         }
      });
   });
   return promise;
};

console.log(convert_to_json());
// Renvoie undefined.. Pourquoi ?
