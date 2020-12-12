const headerSection = document.getElementById("headerSection");
const navigation = document.getElementById("navigation");

headerSection.addEventListener('click', ()=>{
    headerSection.classList.toggle('active');
    navigation.classList.toggle('active');

});

