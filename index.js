async function getChefBirthday(id) {
    try {
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!recipeResponse.ok) {
            throw new Error(`Errore nel recupero della ricetta: ${recipeResponse.status}`);
        }
        const recipeData = await recipeResponse.json();
        const userId = recipeData.userId;

        const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!userResponse.ok) {
            throw new Error(`Errore nel recupero dello chef: ${userResponse.status}`);
        }
        const userData = await userResponse.json();
        
        return userData.birthDate;
    } catch (error) {
        console.error("Errore:", error);
        return null;
    }
}

getChefBirthday(1).then(birthDate => console.log("Data di nascita dello chef:", birthDate));
