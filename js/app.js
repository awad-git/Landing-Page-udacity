window.onscroll = ()=> {
	let i=document.querySelectorAll("section")

    for (let l=0;l<i.length;l++) {
        let b=i[l]
        if(b.getBoundingClientRect().top >= -400 && b.getBoundingClientRect().top <= 150){

            b.classList.add("your-active-class");
            //activeLink.classList.add("active-link");
        
            }
            else{
                 b.classList.remove("your-active-class");
                // activeLink.classList.remove("active-link");
            }
    }

}
    /*.forEach(function(active) {
    let activeLink =querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}*/
//window.arr =['Section 1','Section 2','Section 3']-adding tabs-sections
 function addsec(){
//was here
console.log(document.querySelectorAll('.navbar__menu li'))
let arr =document.querySelectorAll('.navbar__menu li') //was((#t-nav a))
 let newSection=arr.length+1
let c='Section '+newSection ;
 let b="'"+'section'+newSection+"'" // was let b="'"+'#'+'section'+v+"'"
 //let h="<a id="+b+" href='#' onclick=scrollIntoView1(this.id,event)>"+c+'</a>' //was let h='<a href='+b+'>'+c+'</a>'
let h="<a id="+b+" href='#' onclick='scrollIntoView1(this.id,event)'>"+c+"</a>"
console.log(h)
 let n=document.createElement('li')
 //n.className="navbar__menu"
// n.style.cssText=`padding: 1em; font-weight: bold;margin:'2px'; color: #000;`
 n.innerHTML=h
let t=document.getElementById('t-nav')
 t.appendChild(n)

 let ads=document.querySelectorAll('section')
console.log(ads)

   let es=document.createElement('section')

es.id='section'+newSection+'1'
let var2='<h2>'+c+'</h2>'
let cont=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>`

es.innerHTML=var2+cont
document.getElementById('app').appendChild(es)








   
} 

function scrollIntoView1(link,event){
    event.preventDefault();
    
     

    const v=document.getElementById(link).id
    console.log(v)
    

   document.getElementById(v+'1').scrollIntoView({
    behavior: 'smooth',block: "end",
            inline: "nearest",
});}
        //const targetSection = document.getElementById(link)
    
    //console.log(targetSection.id)
        //const navLinks = document.querySelectorAll(".nav a");
        // prevent the page from reloading (a default behavior when a link is clicked)
         //const id = get id from href value of the link -.querySelector(id)` to select the corresponding sectio

        // get the reference to the corresponding section
   //targetSection.href=v  //`'${link}'`+'1'
   //console.log(targetSection.href)
        // add smooth scrolling feature like this-
        //targetSection.scrollIntoView()
        //.{behavior:"smooth";block: "end";inline: "nearest"} 
    
