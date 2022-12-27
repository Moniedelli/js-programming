const buttonHitungTiket = document.querySelector('#buttonHitungTiket');
buttonHitungTiket.addEventListener('click', function (){
    const inputKelas = document.querySelector('#inputKelas').value;
    const inputKota = document.querySelector('#inputKota').value;
    const jumlahTiket = document.querySelector('#jumlahTiket').value;

    let price;
    if(inputKelas == 'Ekonomi'){
        if(inputKota == 'Bandung'){
            price = 600000;
        } else if(inputKota == 'Yogyakarta'){
            price = 800000;
        } else{
            price = 1000000;
        }
    } else {
        if(inputKota == 'Bandung'){
            price = 120000;
        } else if(inputKota == 'Yogyakarta'){
            price = 1000000;
        } else{
            price = 1500000;
        }
    }

    const hargaAsli = price * jumlahTiket;

    let discount;
    if(jumlahTiket > 10){
        discount = (hargaAsli * 5)/100;
    } else {
        discount = 0;
    }

    const harga = document.querySelector('#harga');
    harga.innerHTML = `
        <p>Rp.${hargaAsli}</p>`;

    const diskon = document.querySelector('#discount');
    diskon.innerHTML = `
        <p>Rp.${discount}</p>`;

    const hargaTotal = hargaAsli - discount;
    const total = document.querySelector('#total');
    total.innerHTML = `
        <p>Rp.${hargaTotal}</p>`;    
});