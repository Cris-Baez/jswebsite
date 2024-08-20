// Ocultar el campo con la clase '.elementor-field-group-hidenfield'
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.elementor-field-group-hidenfield');
    if (container) {
        container.style.display = 'none';
    }
});

// Configurar eventos para los botones basados en la lista de personas y especialidades
document.addEventListener('DOMContentLoaded', function () {
    // Lista de personas y sus especialidades
    const peopleSpecialties = {
        'Mario Munoz': 'General Surgery',
        'Andres Felipe Gomez': 'Plastic Surgery',
        'Jairo A Patarroyo': 'Plastic Surgery',
        'Ana Maria Betancur 2': 'Lifestyle Medicine',
        'Ana Milena Montes': 'Dermatology',
        'Claudia Echavarria': 'Dermatology',
        'Ana Milena Garcia': 'Physical Medicine and Rehabilitation',
        'Astrid Milena Perdomo': 'Obstetrics and Gynecology (OB/GYN)',
        'Carlos Andres Ossa': 'Obstetrics and Gynecology (OB/GYN)',
        'Ana Maria Betancur': 'Sports Medicine',
        'Jorge R  Sanchez': 'Internal Medicine',
        'Juan Pablo Polanco': 'Internal Medicine',
        'Natalia Gomez': 'Internal Medicine',
        'Jorge Andres Jimenez': 'Neurology',
        'Juan Gonzalo Gomez': 'Neurology',
        'Andres Castano': 'Neurology',
        'Nora Vanegas': 'Neurology',
        'Ana Maria Sanchez Santamaria': 'Dentistry',
        'Angela Maria Vargas': 'Ophthalmology',
        'Natalia Restrepo': 'Ophthalmology',
        'Elkin Alonso Lopera': 'Orthopedic Surgery',
        'Diego Sanin': 'Orthopedic Surgery',
        'Pedro Pablo Gaviria': 'Orthopedic Surgery',
        'Jorge Alejandro Fajardo': 'Otolaryngology (ENT)',
        'Veronica Rodriguez': 'Otolaryngology (ENT)',
        'Sandra Catalina Rodriguez': 'Psychology',
        'Maria Clara Ramirez': 'Psychology',
        'Diego Lopez': 'Urology',
        'Juan Jose Soto': 'Urology'
    };

    // Iterar sobre cada persona y configurar los eventos para los botones
    Object.keys(peopleSpecialties).forEach(function (person) {
        const button = document.getElementById(person.replace(/\s+/g, '-').toLowerCase()); // Transformar el nombre para el ID

        if (button) { // Asegurarse de que el botón existe
            button.addEventListener('click', function () {
                // Esperar a que el popup esté completamente abierto, luego preseleccionar la persona y la especialidad
                setTimeout(function () {
                    const specialtyField = document.getElementById('form-field-specialty2');
                    const personField = document.getElementById('form-field-hidenfield');

                    if (specialtyField) {
                        specialtyField.value = peopleSpecialties[person];
                    }

                    if (personField) {
                        personField.value = person;
                    }
                }, 50); // Ajusta el tiempo según sea necesario
            });
        }
    });
});
