const buttonHitungNilai = document.querySelector('.btnHitung');
buttonHitungNilai.addEventListener('click', function(){
    const nilaiTugas = document.querySelector('#nilaiTugas').value;
    const nilaiUts = document.querySelector('#nilaiUts').value;
    const nilaiUas = document.querySelector('#nilaiUas').value;

    const nilaiAkhir = () => {
        const nilaiAngka = document.querySelector('.nilaiAngka');
        const hasil = (nilaiTugas * 20/100) + (nilaiUts * 10/100) + (nilaiUas * 50/100);

        nilaiAngka.innerHTML = `
        <div class="box box-1">
            <p class="box-header">Nilai Angka</p>
            <div class="nilaiAngka"><h1>${hasil}</h1></div>
        </div>`;

        const nilaiHuruf = document.querySelector('.nilaiHuruf');
        let grade;
        if(hasil > 80 && hasil < 100){
            grade = 'A';
        } else if(hasil > 70){
            grade = 'B';
        } else if(hasil > 60){
            grade = 'C';
        } else if(hasil > 50){
            grade = 'D';
        } else {
            grade = 'E';
        } 

        nilaiHuruf.innerHTML = `
            <div class="box box-2">
                <p class="box-header">Nilai Huruf</p>
                <div class="nilaiAngka"><h1>${grade}</h1></div>
            </div>`;
    }
    nilaiAkhir();
});


