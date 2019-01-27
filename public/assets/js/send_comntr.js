(function(){
    $("#form_comntr").submit(function(e){
        e.preventDefault();
        //$("#error_phone").text('')
        axios.post("./api/send_comntr", 
            {
                name_user: $("#nom").val(),
                email: $("#email").val(),
                telephone: $("#telephone").val(),
                societe: $("#societé").val(),
                fax: $("#fax").val(),
                sujet: $("#sujet").val(),
                commentaire: $("#comntr").val()
            })
            .then(res => {

                swal(
                    'Success..!',
                    'Votre réservation a été envoyée! Nous vous contactons pour plus de details',
                    'success'
                ).then(result => {
                    $("#nom").val("")
                    $("#email").val(""),
                    $("#telephone").val(""),
                    $("#societé").val(""),
                    $("#fax").val(""),
                    $("#sujet").val(""),
                    $("#comntr").val("")
                })
            })
            .catch(err => {
                swal(
                    'Oops..!',
                    'Nous rencontrer un probléme! Vous pouvez réessayer plus tard',
                    'error'
                ).then(result => {
                    $("#nom").val("")
                    $("#email").val(""),
                    $("#telephone").val(""),
                    $("#societé").val(""),
                    $("#fax").val(""),
                    $("#sujet").val(""),
                    $("#comntr").val("")
                })
            })
        
    })
})();