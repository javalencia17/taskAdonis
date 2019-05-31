var _csrf = $('#_csrf').val()
var base_url = $('meta[name="base_url"]').attr('content')

function modalEdit(id){

    $('#modalTask').modal('show');

    let action = base_url + "/task/modalEdit";


    $.ajax({
        data: { id },
        url: action,        
        type: 'POST',
        headers:{
            'X-CSRF-Token': _csrf
        },
        success: (response) => {
            $('#resultModalTask').html(response);
           // console.log("response",response);
        }
    })

}

function editTask( id ){
    let title = $('#titleM').val()
    let body = $('#bodyM').val()


    let action = base_url + "/task/editTask";
    $.ajax({
        data: { id, title, body },
        url: action,        
        type: 'POST',
        headers:{
            'X-CSRF-Token': _csrf
        },
        success: (response) => {
            $('#modalTask').modal('hide')
        }
    })
}

function deleteTask(id){
    let r = confirm("Realmente desea eliminar la tarea!");
    if(r){
        let action = base_url + "/task/deleteTask";
        $.ajax({
            data: { id },
            url: action,        
            type: 'POST',
            headers:{
                'X-CSRF-Token': _csrf
            },
            success: (response) => {
               console.log(response);
            }
        }) 
    }
}