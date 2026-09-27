const menuButonu = document.querySelector(".menu-ac");

const menu = document.querySelector("nav");


if(menuButonu && menu){

    menuButonu.addEventListener("click",()=>{

        menu.classList.toggle("acik");

    });

}




// ADMIN BİLGİLERİ



const adminKullanici = "admin";

const adminSifre = "admin";





// LOGIN KONTROLÜ



function girisKontrol(){


    let kullaniciAdi = document.getElementById("kullaniciAdi").value;


    let sifre = document.getElementById("sifre").value;



    if(
        kullaniciAdi === adminKullanici &&
        sifre === adminSifre
    ){


        window.location.href="admin.html";


    }
    else{


        alert("Kullanıcı adı veya şifre hatalı");


    }


}