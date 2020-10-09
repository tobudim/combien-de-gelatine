const requestButton = document.getElementById('request-button');

requestButton.addEventListener("click", () => {
    const totalGramInput = document.getElementById('total-g');
    const totalG = totalGramInput.value;

    if (isNaN(totalG)) {
        console.error("Autre chose qu'un chiffre a été renseigné.");
    } else {
        const checkResultDiv = document.getElementById('result');
        if (checkResultDiv) checkResultDiv.outerHTML = '';

        // Water is 6 times gelatin
        let portion = totalG / 7;
        let gelatin = portion;
        let water = totalG - portion;

        // Round it up
        let gelatinWholeNumber = Math.round(gelatin);
        let gelatinDecimal = gelatin.toFixed(2);
        let waterWholeNumber = Math.round(water);
        let waterDecimal = water.toFixed(2);
    
        // HTML elements
        let resultDiv = document.createElement('div');
        let gelatinTitle = document.createElement('h3');
        let waterTitle = document.createElement('h3');
        let gelatinSubtitle = document.createElement('p');
        let waterSubtitle = document.createElement('p');

        resultDiv.id = "result";
        gelatinTitle.textContent = `Gélatine : ${gelatinWholeNumber}g`;
        gelatinSubtitle.textContent = `Valeur non arrondie : ${gelatinDecimal}g`;
        waterTitle.textContent = `Eau : ${waterWholeNumber}g`;
        waterSubtitle.textContent = `Valeur non arrondie : ${waterDecimal}g`;

        resultDiv.append(gelatinTitle);
        resultDiv.append(gelatinSubtitle);
        resultDiv.append(waterTitle);
        resultDiv.append(waterSubtitle);
    
        // DOM integration
        const presentation = document.getElementById('presentation');
        if (presentation) presentation.outerHTML = '';
        
        const gelatinWrapper = document.body;
        gelatinWrapper.append(resultDiv);
    }
});