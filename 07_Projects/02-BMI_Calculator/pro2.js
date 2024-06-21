const form = document.querySelector('form')

form.addEventListener('click', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('height').value)
    const weight = parseInt(document.querySelector('weight').value)
    const result = document.querySelector('results')

    if (height === 0  || height < 0 || isNaN(height)  ) {
        result.innerHTML = `Enter the valid height ${height}`
    }else if (weight === 0  || weight < 0 || isNaN(weight)  ) {
        result.innerHTML = `Enter the valid height ${weight}`
    }else {
       const bmi = ((weight / (height*height)/1000)).toFixed(2);
       result.innerHTML = `<span>${bmi}<span>`
    }
})