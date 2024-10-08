document.addEventListener('DOMContentLoaded', function () {
    // Lista de especialidades y sus botones correspondientes
    const specialties = [
        { buttonId: 'button-general-inquiry', specialty: 'General Inquiry' },
        { buttonId: 'button-dermatology', specialty: 'Dermatology' },
        { buttonId: 'button-general-surgery', specialty: 'General Surgery' },
        { buttonId: 'button-internal-medicine', specialty: 'Internal Medicine' },
        { buttonId: 'button-lifestyle-medicine', specialty: 'Lifestyle Medicine' },
        { buttonId: 'button-neurology', specialty: 'Neurology' },
        { buttonId: 'button-obgyn', specialty: 'Obstetrics and Gynecology (OB/GYN)' },
        { buttonId: 'button-odontology', specialty: 'Odontology' },
        { buttonId: 'button-ophthalmology', specialty: 'Ophthalmology' },
        { buttonId: 'button-orthopedic-surgery', specialty: 'Orthopedic Surgery' },
        { buttonId: 'button-ent', specialty: 'Otolaryngology (ENT)' },
        { buttonId: 'button-physical-medicine', specialty: 'Physical Medicine and Rehabilitation' },
        { buttonId: 'button-plastic-surgery', specialty: 'Plastic Surgery' },
        { buttonId: 'button-psychology', specialty: 'Psychology' },
        { buttonId: 'button-sports-medicine', specialty: 'Sports Medicine' },
        { buttonId: 'button-urology', specialty: 'Urology' },
        { buttonId: 'button-biotransformation', specialty: 'Biotransformation' }, // Nueva especialidad agregada
        { buttonId: 'button-performance-preventative', specialty: 'Performance & Preventative Health' }, // Nueva especialidad agregada
    ];

    // Iterar sobre cada especialidad y configurar los eventos para los botones
    specialties.forEach(function (item) {
        const button = document.getElementById(item.buttonId);

        if (button) { // Asegurarse de que el botón existe
            button.addEventListener('click', function () {
                // Esperar a que el popup esté completamente abierto, luego preseleccionar la especialidad
                setTimeout(function () {
                    const specialtyField = document.getElementById('form-field-specialty1');
                    if (specialtyField) {
                        specialtyField.value = item.specialty;
                    }
                }, 50); // Ajusta el tiempo según sea necesario
            });
        }
    });
});
