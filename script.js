let str = ""
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=')
        {
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == 'A')
        {
            str = "";
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == 'B')
        {
            str = str.slice(0,str.length - 1);//str.slice(0,-1);
            document.querySelector('input').value = str;
        }
        else
        {
            str += e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})