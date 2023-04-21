export const randomIdGenerator = (array = []) => {
    let id = "";

    for(let i = 0; i < 6; i++){
        id += Math.floor(Math.random() * 9)
    }

    for(let j = 0; j < array.length; j++){
        if(array[j].id === id){
            return randomIdGenerator(array)
        }
    }

    return id
}