const buttonHitungRental = document.querySelector('#buttonHitungRental');
buttonHitungRental.addEventListener('click', function(){
    const inputMobil = document.querySelector('#inputMobil').value;
    const inputDurasi = document.querySelector('#inputDurasi').value;

    let price;
    if(inputMobil == 'Avanza'){
            price = 300000;
        } else if(inputMobil == 'CRV'){
            price = 400000;
        } else{
            price = 250000;
        }
    
        const priceTotal = price * inputDurasi;
        const totalBayar = document.querySelector('#totalBayar');
        totalBayar.innerHTML = `
            <p>Rp.${priceTotal}</p>`;
})