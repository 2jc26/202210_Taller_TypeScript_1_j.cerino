import {series} from './data.js';
import {Serie} from './Serie.js';

let seriesTable: HTMLElement = document.getElementById("series")!;

mostrarSeries(series);

function mostrarSeries(listaSeries: Serie[]): void {
    let tbodySeries = document.createElement("tbody");
    for(let serie of listaSeries){
        tbodySeries.innerHTML += `
        <tr class="table-secondary">
        <th scope="row">${serie.id}</th>
            <td>${serie.name}</td>
            <td>${serie.chanel}</td>
            <td>${serie.seasons}</td>
        </tr>`
    }
    tbodySeries.innerHTML += `<tr><th scope="row">Seasons avarage: ${calcularMedia(listaSeries)}</th></tr>`;
    seriesTable.appendChild(tbodySeries);
}

function calcularMedia(listaSeries:Serie[]):number{
    let promedio: number = 0;
    for(let i= 0; i<listaSeries.length; i++){
        let serie: Serie = listaSeries[i];
        promedio += serie.seasons;
    }
    promedio /= listaSeries.length;
    return promedio;
}