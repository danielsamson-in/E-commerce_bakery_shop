function sendMail()
{

    emailjs.send("service_naixqdf","template_o8sjtf5",
    {
        
        from_name: document.getElementById('fromname').value,
        message: document.getElementById('msg').value,
        }).then(Response=>{
            console.log("success");
            alert("response send :D")
        },(error)=>{
            console.log(error);
        })
}

document.getElementById("email").addEventListener("click",sendMail);
    

