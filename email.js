function sendMail()
{

    emailjs.send("service_naixqdf","template_o8sjtf5",
    {
        
        from_name: document.getElementById('fromname').value,
        reply_to:document.getElementById('mai').value,
        message: document.getElementById('msg').value,
        }).then(Response=>{
            
            swal({
                title: 'done!',
                text: 'Mail send:)!',
                icon: 'success'

              }).then(function(){
                  window.location.reload()

              })
        },(error)=>{
            console.log(error);
        })
}

document.getElementById("email").addEventListener("click",sendMail);
    

