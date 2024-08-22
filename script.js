function confirmDelete() {
    return confirm('¿Estás seguro?');
}

function generarTarjetas() {
    const cantidad = document.getElementById('cantidadInventarios').value || 1; // Número de tarjetas a generar
    const container = document.getElementById('inventarioContainer');
    
    // Limpiar el contenedor antes de agregar nuevas tarjetas
    container.innerHTML = '';

    for (let i = 0; i < cantidad; i++) {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-content">
                <h2 class="card-title">Nombre del Inventario ${i + 1}</h2>
                <p class="card-text"><strong>Cantidad:</strong> ${Math.floor(Math.random() * 100)}</p>
                <p class="card-text"><strong>Fecha:</strong> ${new Date().toISOString().split('T')[0]}</p>
                <div class="btn-group">
                    <a href="#" class="btn btn-view">Ver</a>
                    <a href="#" class="btn btn-edit">Editar</a>
                    <button class="btn btn-delete" onclick="confirmDelete()">Eliminar</button>
                </div>
            </div>
        `;

        container.appendChild(card);
    }
}
