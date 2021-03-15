 

var txt = ("Hi,I am Swayam.I am a firstyear under-graduate at BITS PILANI,Goa campus.I love to design and create new things and i aspire to a Web Developer in future. Apart from Webdev,I love to solve problems and hence I am into Competitive Programming.Taking about my hobbies,I love watching and playing cricket.I enjoy watching movies and even love travelling to new places.I do have craze for food and even love cooking.I just wanna explore in my few years at college. ");

var x= 0;

function typeWriter(){
    document.getElementById("text").innerHTML += txt.charAt(x);
    x++
}
setInterval(typeWriter,100);

