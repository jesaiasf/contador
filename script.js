document.addEventListener('DOMContentLoaded', function() {
    const valueElement = document.getElementById('value');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
    
    let count = 0;
    
    function updateValue() {
        valueElement.textContent = count;
        
        // Altera a cor baseada no valor
        if (count > 0) {
            valueElement.style.color = '#2ecc71'; // Verde para valores positivos
        } else if (count < 0) {
            valueElement.style.color = '#e74c3c'; // Vermelho para valores negativos
        } else {
            valueElement.style.color = '#333'; // Cinza escuro para zero
        }
    }
    
    incrementButton.addEventListener('click', function() {
        count++;
        updateValue();
    });
    
    decrementButton.addEventListener('click', function() {
        count--;
        updateValue();
    });
    
    resetButton.addEventListener('click', function() {
        count = 0;
        updateValue();
    });
    
    // Inicializa o valor
    updateValue();
});