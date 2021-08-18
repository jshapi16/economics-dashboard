$(function () {
    $('.js-basic-example').DataTable({
        responsive: true,
    });

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'pdf', 'print'
        ]
    });
});