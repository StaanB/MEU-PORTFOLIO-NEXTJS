export function sendWhatsMessage(){
    const message = (document.getElementById("message") as HTMLInputElement).value


    window.open(`https://wa.me/+5571986895914?text=${message}`)
    
}