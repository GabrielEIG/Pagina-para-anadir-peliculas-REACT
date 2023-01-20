export const SaveInfoStorage = (key, elementToSave)=>{

    let elements = JSON.parse(localStorage.getItem(key));

    //Confirmar si es un array
    if(Array.isArray(elements)){
        elements.push(elementToSave)
    }else{
        elements = [elementToSave];
    }

    localStorage.setItem(key,JSON.stringify(elements))

    return elementToSave
}