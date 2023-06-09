const productos = [
    
            {
                "id": 1,
                "categoria": "Extensiones de pestañas",
                "nombre": "Clasicas",
                "precio": 3100,
                "img":"./assets/clasicas.jpg",
                "stock": 20,
                "descripcion":"pestñas pxp, luce tus extensiones de manera natural"
            },
            {
                "id": 2,
                "categoria": "Extensiones de pestañas",
                "nombre": "Volumen 2D",
                "precio": 3300,
                "img":"./assets/dos-de.jpg" ,
                "stock": 20,
                "descripcion": "Agrega un poco mas a esas pestañas clasicas, un estilo sutil pero que reslta un monton la mirada"
            },
            {
                "id": 3,
                "categoria": "Extensiones de pestañas",
                "nombre": "Volumen Bajo",
                "precio": 3600,
                "img":"./assets/tres-de.jpg",
                "stock": 15,
                "descripcion": "No estas segura de hacerte un volumen exagerado? pero tampoco queres clasicas? esta es la mejor opcion, un volumen natural que no es exagerado"

            },
            {
                "id": 4,
                "categoria": "Extensiones de pestañas",
                "nombre": "Volumen Medio",
                "precio": 3900,
                "img":"./assets/cinco-de.jpg", 
                "stock": 10,
                "descripcion": "Si sos amante del volumen, definitavemente este es la mejor opcion, un volumen con abanicos en 5D que marca mucho tu mirada"

            },
            {
                "id": 5,
                "categoria": "Extensiones de pestañas",
                "nombre": "Volumen Ruso",
                "precio": 4600,
                "img":"./assets/volumen-ruso.jpg", 
                "stock":10,
                "descripcion":"La mejor opcion si queres un volumen bien marcado"
            },
            {
                "id": 6,
                "categoria": "Extensiones de pestañas",
                "nombre": "Mega Volumen",
                "precio": 5100,
                "img":"./assets/mega.jpg",
                "stock":2,
                "descripcion":"Mega Volumen, su duracion de colocacion es de 3 hrs a 4hrs y son un viaje de no retorno porque son las que mas duran."
            },
            {
                "id": 7,
                "categoria": "Lifting de Pestañas",
                "nombre": "lifting",
                "precio": 2900,
                "img":"./assets/lifting.jpg",
                "stock": 25,
                "descripcion":"No queres saber nada de las extensiones de pestañas, o no te animas a las extensiones? el lifting es lo que estas buscando. Es un estilo natural, ya que es para arquear las pestañas naturales y que duren x mas de un mes sin necesidad de usar arqueadores o extensiones."  
            },
            {
                "id": 8,
                "categoria": "Lifting de Pestañas",
                "nombre": "Lifting+tinte",
                "precio": 3000,
                "img":"./assets/lifting.jpg",
                "stock": 20,
                "descripcion":"sumale un poco de color a tu lifting con un poco de tinte, no vas a tener necesidad de usar mas nada de mascara de pestañas" 
            },
            {
                "id": 9,
                "categoria": "Lifting de Pestañas",
                "nombre": "Lifting+tinte+botox",
                "precio": 3100,
                "img":"./assets/lifting.jpg",
                "stock":30,
                "descripcion":"La mejor opcion de lifting, ya que le agregamos un tratamiento especial para que la pestaña no se dañe y pueda seguir creciendo aun mas" 
            },
            {
                "id": 10,
                "categoria": "Cejas",
                "nombre": "Perfilado de cejas",
                "precio": 900,
                "img":"./assets/lifting.jpg",
                "stock": 30,
                "descripcion":"agrega un plus a tu colocacion de pestañas o lifting con un perfilado de cejas!"
            },
            {
                "id": 11,
                "categoria": "Cejas",
                "nombre": "Perfilado+laminado",
                "precio": 1600,
                "img":"./assets/fondo.jpg",
                "stock": 10,
                "descripcion": "La tecnica del laminado se utiliza para levantar la ceja y fijarlas, acompañado de un perfilado que es para poder tener las cejas super prolijas en todo momento" 
            },
            {
                "id": 12,
                "categoria": "Cejas",
                "nombre": "Perfilado+Tinte",
                "precio": 1400,
                "img":"./assets/fondo.jpg",
                "stock": 10,
                "descripcion": "agregale a tu perfilado un poco de color"
            },
            {
                "id": 13,
                "categoria": "Cejas",
                "nombre": "Perfilado+laminado+tinte",
                "precio": 1900,
                "img":"./assets/fondo.jpg", 
                "stock": 9,
                "descripcion":"lo mas completo de cejas"
            },
        
            {
                "id": 14,
                "categoria": "extra de pestañas",
                "nombre": "remocion de pestañas",
                "precio": 900,
                "img":"./assets/fondo.jpg",
                "stock": 20,
                "descripcion": "remocion"
            },
            {
                "id": 15,
                "categoria": "extra de pestañas",
                "nombre": "strass",
                "precio": 600,
                "img":"./assets/logo.jpg",
                "stock":20,
                "descripcion":"strass de mariposa, de corazon o el simple, elegi el diseño que mas te guste" 
            },
            {
                "id": 16,
                "categoria": "extra de pestañas",
                "nombre": "Color en la punta",
                "precio": 900,
                "img":"./assets/fondo.jpg",
                "stock": 5,
                "descripcion":"agrega un poco de color a tus pestañas"

            },
            {
                "id": 17,
                "categoria": "Uñas",
                "nombre": "Semipermanente",
                "precio": 1500,
                "img":"./assets/logo.jpg",
                "stock": 10,
                "descripcion":"agrega color a tus uñas naturales" 
            },
            {
                "id": 18,
                "categoria": "Uñas",
                "nombre": "Semipermanente con french",
                "precio": 1700,
                "img":"./assets/logo.jpg",
                "stock": 10,
                "descripcion":"semi en french"
            },
            {
                "id": 19,
                "categoria": "Uñas",
                "nombre": "Kappin con semi",
                "precio": 2500,
                "img":"./assets/logo.jpg",
                "stock": 10,
                "descripcion":"Ideal para esas uñas maltratadas que no logran crecer. con esta forma podras haceer que tus uñas naturales puedan crecer sanas y hermosas" 
            },
            {
                "id": 20,
                "categoria": "Uñas",
                "nombre": "Soft Gel",
                "precio": 3000,
                "img":"./assets/logo.jpg",
                "stock":20,
                "descripcion":"Elegi el tamaño que mas te guste y hacete unas uñas soft" 
            },
            {
                "id": 21,
                "categoria": "otros de uñas",
                "nombre": "strass x uña",
                "precio": 100,
                "img":"./assets/logo.jpg",
                "stock": 50, 
                "descripcion":"agrega strass o diseños de strass a tus uñas"
            },
            {
                "id": 22,
                "categoria": "otros de uñas",
                "nombre": "Deco x uña o nail art x uña",
                "precio": 100,
                "img":"./assets/logo.jpg",
                "stock": 30,
                "descripcion":"animal, print, cebra, corazones, marmolado, sugar, encapsulado, o el diseño que mas te guste"
            },
            {
                "id": 23,
                "categoria": "otros de uñas",
                "nombre": "Remocion de semi",
                "precio": 700,
                "img":"../../assets/logo.jpg.",
                "stock": 5,
                "descripcion":"remocion de uñas"
            }
        ]
     export const getProducts =()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)
            }, 500)
        })
     }
 export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod =>prod.id === productId))
        }, 500)
    })
 }