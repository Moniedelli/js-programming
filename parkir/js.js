const btnHitungParkir = document.querySelector('#btnHitungParkir');
btnHitungParkir.addEventListener('click', function(){
    const inputKendaraan = document.querySelector('#inputKendaraan').value;
    const lamaParkir = document.querySelector('#lamaParkir').value;

    let price;
    if(inputKendaraan == 'Mobil'){
        if(lamaParkir > 0 && lamaParkir == 1){
            price = 3000;
        } else if(lamaParkir >= 2 && lamaParkir <= 4){
            price = 5000;
        } else if(lamaParkir > 5){
            price = 7000;
        } else {
            alert('Silahkan masukkan lama jam parkir');
        }
    } else if (inputKendaraan == 'Motor'){
        if(lamaParkir > 0 && lamaParkir == 1){
            price = 1000;
        } else if(lamaParkir >= 2 && lamaParkir <= 4){
            price = 2000;
        } else if(lamaParkir > 5){
            price = 4000;
        } else {
            alert('Silahkan masukkan lama jam parkir');
        }
    } else {
        alert('Silahkan masukkan jenis kendaraan');
    }

    const totalBayar = price * lamaParkir;
    alert(`Jenis kendaraan: ${inputKendaraan}
    Total bayar : Rp.${totalBayar}`);
})