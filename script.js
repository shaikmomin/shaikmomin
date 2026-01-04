// Magnetic Button Effect

const magneticBtn = document.getElementById('magneticBtn');

if (magneticBtn) {
    magneticBtn.addEventListener('mousemove', (e) => {
        const position = magneticBtn.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;

        magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    magneticBtn.addEventListener('mouseleave', () => {
        magneticBtn.style.transform = 'translate(0px, 0px)';
    });
}
