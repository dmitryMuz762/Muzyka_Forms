function handleForm(){
    alert("Запрос отправлен")


    console.log(document.aboba.but.value)

    console.log(document.aboba.answear_1.checked);
    console.log(document.aboba.answear_2.checked);
    console.log(document.aboba.answear_3.checked);

    for (i=0; i<document.aboba.answear.length;i++)
    {
        if(document.aboba.answear[i].checked)
        { console.log(document.aboba.answear[i].value) }
    }
}
