import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyCTZZw6-7l_OQ-oDrs1ZMI2y85l2WvrTRg",
        authDomain: "e-commerce-2475a.firebaseapp.com",
        projectId: "e-commerce-2475a",
        storageBucket: "e-commerce-2475a.appspot.com",
        messagingSenderId: "725630893576",
        appId: "1:725630893576:web:803a54490c2300c1369bbd"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
      

        import{
        getFirestore, doc, getDoc, deleteDoc
        }

        from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";



        const db = getFirestore();
        let cellV = document.getElementById("cell");   
        let reaBtn = document.getElementById("read");       
        let delBtn = document.getElementById("delete");






        async function getADocument(){
            var ref = doc(db,"Customerlist",cellV.value);
  
            const docSnap = await getDoc(ref);
  
            if(docSnap.exists()){
              document.getElementById("pp1").innerHTML = docSnap.data().name;
              document.getElementById("pp2").innerHTML =docSnap.data().cake;
              document.getElementById("pp3").innerHTML = docSnap.data().Quantity;
              document.getElementById("pp4").innerHTML =docSnap.data().address;
  
              
  
            }
            else{
              swal({
                text: "Order not found!",
                dangerMode:true,
              });
              }
          }

            //--------------------------cancel_order--------------------//
          function confirmAlert()
        {
        
            swal({
                title: "Are you sure?",
                
                icon: "warning",
                buttons: [
                  'No, cancel it!',
                  'Yes, I am sure!'
                ],
                dangerMode: true,
              }).then(function(isConfirm) {
                if (isConfirm) {
                  swal({
                    title: 'done!',
                    text: 'order cancelled!',
                    icon: 'success'

                  }).then(function(){
                      window.location.reload()

                  })
                } else {
                  swal({
                    title: 'Cancelled!',
                    text: 'order not Cancelled!',
                    icon: 'error'
                  });
                }
              })
        }
          async function delADocument(){
            var ref = doc(db,"Customerlist",cellV.value);
  
            const docSnap = await getDoc(ref);
            let a=confirmAlert();
            if(a){
            if(!docSnap.exists()){
              alert("Order not found" )
              return;
            }
           await deleteDoc(ref)
           .then(()=>{
            
           })
           .catch((error)=>{
             alert("unsuccessful,error"+error)
           })
             }
            
            else
            {
              
            }
        }




                              /*button*/


        reaBtn.addEventListener("click", getADocument);
        delBtn.addEventListener("click",delADocument);

        document.getElementById("reload").addEventListener("click",()=>{
            window.location.reload();
            
        })