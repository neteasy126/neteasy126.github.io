const text = document.querySelector('.text');
const txt  =["欢迎访问","这里是小赵的个人网页","Thanks for visit me","This is my website"]; 

var index=0;
var xiaBiao= 0;
var huan = true;

setInterval(function(){

if(huan){      
	text.innerHTML = txt[xiaBiao].slice(0,++index);
	console.log(index);
}
            else{
                text.innerHTML = txt[xiaBiao].slice(0,index--);
                console.log(index);
            }

            if(index==txt[xiaBiao].length+3)
            {
                huan = false;
            }
            else if(index<0)
            {
                index = 0;
                huan = true;
                xiaBiao++;
                if(xiaBiao>=txt.length)
                {
                    xiaBiao=0; 
                }
            }

        },200)
