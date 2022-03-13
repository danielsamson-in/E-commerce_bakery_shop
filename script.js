        
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
        getFirestore, doc, setDoc
        }

        from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
       
     
        const db = getFirestore();


        let Asize = document.getElementById("choose1");
        let bsize = document.getElementById("choose2");
        let csize = document.getElementById("choose3");
        let dsize = document.getElementById("choose4");
        let esize = document.getElementById("choose5");
        let fsize = document.getElementById("choose6");
        let gsize = document.getElementById("choose7");
        let hsize = document.getElementById("choose8");


        let Aname = document.getElementById("name");
        let Aphonenumber = document.getElementById("phonenumber");
        let Aaddress = document.getElementById("address");


        let add1 = document.getElementById("btn1");
        let add2 = document.getElementById("btn2");
        let add3 = document.getElementById("btn3");
        let add4 = document.getElementById("btn4");
        let add5 = document.getElementById("btn5");
        let add6 = document.getElementById("btn6");
        let add7 = document.getElementById("btn7");
        let add8 = document.getElementById("btn8");

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
                    text: 'order placed!',
                    icon: 'success'

                  }).then(function(){
                      window.location.reload()

                  })
                } else {
                  swal({
                    title: 'Cancelled!',
                    text: 'order not placed!',
                    icon: 'error'
                  });
                }
              })
        }
        
        async function AddDocument_Custom1()
                {
                    
                    let a=confirmAlert();
                    if(a){
                    var ref = doc(db,"Customerlist",Aphonenumber.value);

                    await setDoc(
                        ref, {
                        
                        name: Aname.value,
                        Quantity: Asize.value,
                        cake: "black forest",
                        phone: Aphonenumber.value,
                        address: Aaddress.value

                        }
                    )
                    .then(()=>{
                       
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })
                }
                else{
                   
                }
            }

        async function AddDocument_Custom2()
                {
                    let a=confirmAlert();
                    if(a){
                var ref = doc(db,"Customerlist",Aphonenumber.value);
       
                await setDoc(
                    ref, {
                        
                    name: Aname.value,
                    Quantity: bsize.value,
                    cake: "red velvet",
                    phone: Aphonenumber.value,
                    address: Aaddress.value
       
                       }
                   )
                    .then(()=>{
                        
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })
                }else{
                  
                }
            }

        async function AddDocument_Custom3()
                {
                    let a=confirmAlert();
                    if(a){
            var ref = doc(db,"Customerlist",Aphonenumber.value);
       
                await setDoc(
                    ref, {
                        
                    name: Aname.value,
                    Quantity: csize.value,
                    cake: "cheese cake",
                    phone: Aphonenumber.value,
                    address: Aaddress.value
       
                       }
                   )
                    .then(()=>{
                        
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })
                }
                else{
                    
                }
            }
            
        async function AddDocument_Custom4()
                {
                    let a=confirmAlert();
                    if(a){
                var ref = doc(db,"Customerlist",Aphonenumber.value);
       
                await setDoc(
                    ref, {
                        
                    name: Aname.value,
                    Quantity: dsize.value,
                    cake: "mango cake",
                    phone: Aphonenumber.value,
                    address: Aaddress.value
       
                       }
                   )
                    .then(()=>{
                     
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })}
                    else{
                     
                    }
            }

        async function AddDocument_Custom5()
                {
                    let a=confirmAlert();
                    if(a){
                var ref = doc(db,"Customerlist",Aphonenumber.value);
       
                await setDoc(
                    ref, {
                        
                    name: Aname.value,
                    Quantity: esize.value,
                    cake: "black current",
                    phone: Aphonenumber.value,
                    address: Aaddress.value
       
                       }
                   )
                    .then(()=>{
                       
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })}
                    else{
                      
                    }
            }

        async function AddDocument_Custom6()
                {
                    let a=confirmAlert();
                    if(a){
                var ref = doc(db,"Customerlist",Aphonenumber.value);
       
                await setDoc(
                    ref, {
                        
                    name: Aname.value,
                    Quantity: fsize.value,
                    cake: "butterscotch",
                    phone: Aphonenumber.value,
                    address: Aaddress.value
       
                       }
                   )
                    .then(()=>{
                        
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })}
                    else{
                        
                    }
            }

        async function AddDocument_Custom7()
                {
                    let a=confirmAlert();
                if(a){
                var ref = doc(db,"Customerlist",Aphonenumber.value);
       
                await setDoc(
                    ref, {
                        
                    name: Aname.value,
                    Quantity: gsize.value,
                    cake: "oreo cake",
                    phone: Aphonenumber.value,
                    address: Aaddress.value
       
                       }
                   )
                    .then(()=>{
                      
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })}
                    else{
                    
                    }
            }

        async function AddDocument_Custom8()
                {
                    let a=confirmAlert();
                    if(a){
                var ref = doc(db,"Customerlist",Aphonenumber.value);
       
                await setDoc(
                    ref, {
                        
                    name: Aname.value,
                    Quantity: hsize.value,
                    cake: "choco cake",
                    phone: Aphonenumber.value,
                    address: Aaddress.value
       
                       }
                   )
                    .then(()=>{
                        
                    })
                    .catch((error)=>{
                        alert("unsuccessuful,error"+ error);
                    })}
                    else{
                       
                    }
            }

        //------------------------------------------button--------------------------------------------------------//
            add1.addEventListener("click", AddDocument_Custom1);
            add2.addEventListener("click", AddDocument_Custom2);
            add3.addEventListener("click", AddDocument_Custom3);
            add4.addEventListener("click", AddDocument_Custom4);
            add5.addEventListener("click", AddDocument_Custom5);
            add6.addEventListener("click", AddDocument_Custom6);
            add7.addEventListener("click", AddDocument_Custom7);
            add8.addEventListener("click", AddDocument_Custom8);



        //-----------------------------refersh-------------------------------------------------//     
            document.getElementById("clear").addEventListener("click",()=>{
                window.location.reload();
                
            })

            

