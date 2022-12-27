const buttonInputBandingkan = document.querySelector('#buttonInputBandingkan');
buttonInputBandingkan.addEventListener('click', function(){
    const nilaiA = document.querySelector('#nilaiA').value;
    const nilaiB = document.querySelector('#nilaiB').value;
    const nilaiC = document.querySelector('#nilaiC').value;

    let nilaiTerbesar, angkaTerbesar;
    if(nilaiA > nilaiB && nilaiA > nilaiC){
        angkaTerbesar = nilaiA;
        nilaiTerbesar = 'nilaiA';
    } else if (nilaiB > nilaiA && nilaiB > nilaiC){
        angkaTerbesar = nilaiB;
        nilaiTerbesar = 'nilaiB';
    } else if (nilaiC > nilaiA && nilaiC > nilaiB){
        angkaTerbesar = nilaiC;
        nilaiTerbesar = 'nilaiC';
    } else {
        alert('Terdapat 2 bilangan terbesar yang nilainya sama');
    }

    const terbesar = document.querySelector('.terbesar');
    terbesar.innerHTML = `
        <div class="box box-1">
        <p class="box-header">Nilai Terbesar</p>
        <h1>${nilaiTerbesar} = ${angkaTerbesar}</h1>
        </div>`;

        let nilaiTerkecil, angkaTerkecil;
        if(nilaiA < nilaiB && nilaiA < nilaiC){
            angkaTerkecil = nilaiA;
            nilaiTerkecil = 'nilaiA';
        } else if (nilaiB < nilaiA && nilaiB < nilaiC){
            angkaTerkecil = nilaiB;
            nilaiTerkecil = 'nilaiB';
        } else if (nilaiC < nilaiA && nilaiC < nilaiB){
            angkaTerkecil = nilaiC;
            nilaiTerkecil = 'nilaiC';
        } else {
            alert('Terdapat 2 bilangan terkecil yang nilainya sama');
        }
    
        const terkecil= document.querySelector('.terkecil');
        terkecil.innerHTML = `
            <div class="box box-2">
            <p class="box-header">Nilai Terkecil</p>
            <h1>${nilaiTerkecil} = ${angkaTerkecil}</h1>
            </div>`;
})
