document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Si el enlace es interno (contiene #)
        if (href.startsWith('#')) {
            e.preventDefault(); // Prevenir el comportamiento por defecto de un enlace interno
            
            const targetId = href.substring(1); // Obtener el ID de la sección
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // Si el enlace es a otra página (como energías.html)
        else {
            // No prevenimos la acción para enlaces externos (otros archivos HTML)
            window.location.href = href;
        }
    });
});

// Código adicional para efectos de estilo en los enlaces
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('mouseover', function () {
        this.style.color = 'green';
    });

    anchor.addEventListener('mouseout', function () {
        this.style.color = '';
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('focus', function () {
        this.style.borderBottom = '2px solid blue';
    });

    anchor.addEventListener('blur', function () {
        this.style.borderBottom = '';  
    });
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// formaulario.js

// Datos históricos de energía renovable (simplificados)
const historicalData = [
    { year: 1965, wind: 0, solar: 0, hydro: 100, geothermal: 0, total: 100 },
    { year: 1970, wind: 5, solar: 0, hydro: 120, geothermal: 2, total: 127 },
    { year: 1980, wind: 20, solar: 0, hydro: 150, geothermal: 10, total: 180 },
    { year: 1990, wind: 100, solar: 5, hydro: 200, geothermal: 30, total: 335 },
    { year: 2000, wind: 500, solar: 50, hydro: 300, geothermal: 50, total: 900 },
    { year: 2010, wind: 1500, solar: 200, hydro: 350, geothermal: 200, total: 2250 },
    { year: 2020, wind: 5000, solar: 10000, hydro: 4000, geothermal: 500, total: 20000 }
];

// Cargar los datos históricos en la tabla
function loadData() {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    
    historicalData.forEach(data => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = data.year;
        row.insertCell(1).innerText = data.wind;
        row.insertCell(2).innerText = data.solar;
        row.insertCell(3).innerText = data.hydro;
        row.insertCell(4).innerText = data.geothermal;
        row.insertCell(5).innerText = data.total;
    });
}

// Función para calcular el porcentaje de energía renovable
function calcularPorcentaje() {
    const totalConsumption = document.getElementById('totalConsumption').value;

    if (totalConsumption <= 0) {
        alert("Por favor, ingrese un consumo eléctrico válido.");
        return;
    }

    // Calcular la capacidad instalada total renovable sumando las capacidades por fuente
    const totalRenewableCapacity = historicalData.reduce((acc, data) => acc + data.total, 0);

    // Calcular el porcentaje de energía renovable
    const renewablePercentage = (totalRenewableCapacity / totalConsumption) * 100;

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `El porcentaje de energía renovable en el consumo eléctrico es: ${renewablePercentage.toFixed(2)}%`;
}

// Cargar los datos al cargar la página
window.onload = loadData;
function calcularPorcentaje() {
    const totalConsumption = document.getElementById('totalConsumption').value;
    const energyType = document.getElementById('energyType').value;

    // Valores de porcentaje según el tipo de energía
    const energyPercentages = {
        solar: 40,
        eolica: 50,
        hidraulica: 70,
        mixta: 30,
    };

    if (totalConsumption > 0 && energyType) {
        const renewablePercentage = energyPercentages[energyType];
        const renewableEnergy = (totalConsumption * renewablePercentage) / 100;

        document.getElementById('result').textContent = `De tu consumo total (${totalConsumption} kWh), aproximadamente ${renewableEnergy.toFixed(2)} kWh provienen de energía renovable del tipo seleccionado (${energyType}).`;
    } else {
        document.getElementById('result').textContent = "Por favor, introduce un valor válido y selecciona un tipo de energía.";
    }
}
