function button(){
    let color = ['lightblue', 'pink' , 'hotpink', 'lavendar', 'yellow' , 'coral' , 'red'];
    let data = color[Math.floor(Math.random()*color.length)]
    document.body.style.backgroundColor=data;
}
button()
