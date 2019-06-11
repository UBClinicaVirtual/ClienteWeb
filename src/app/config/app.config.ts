export const menuSidebar =
    [
        {   "titulo": 'Dashboard',
            "userType":[1,2,3],
            "url": '/dashboard'
        },
        {
            "titulo":"Buscar Turno",
            "userType":[1],
            "url":"/search-turn"
        },
        {
            "titulo":"Mis turnos",
            "userType":[1,2],
            "url":"/turnos"
        },
        {
            "titulo":"Reporte Medico",
            "userType":[2],
            "url":"/hcp-report"
        },
        {
            "titulo":"Buscar Doctores",
            "userType":[3],
            "url":"/search-hcps"
        },
        {
            "titulo":"Mi Perfil",
            "userType":[1,2,3],
            "url":"/protected"
        }
    ]

export const menuAppointment =
    [
        {
            "btnName":"Cancelar turno",
            "status":'Pending',
            "userType":[1],
            "event":"deleteSwal.show()"
        },
        {
            "btnName":"Pedir turno",
            "status":'',
            "userType":[1],
            "event":"sheduleAppointmentSwal.show()"
        },
        {
            "btnName":"Descripcion",
            "status":'Agendado',
            "userType":[2],
            "event":""
        },
    ]