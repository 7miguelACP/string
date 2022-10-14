
let nombre = "Miguel Angel";
let apellidos= "Cervantes Poma";

let estudiante = nombre +" "+ apellidos;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let total_espacios = estudiante.length;
let p_letra = nombre.charAt(0);
let l_apellido = apellidos.charAt(apellidos.length -1);
let e_espacios = estudiante.replace( / /g,"");
let existe= estudiante.includes(nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(total_espacios);
console.log(p_letra);
console.log(l_apellido);
console.log(e_espacios);
console.log(existe);


