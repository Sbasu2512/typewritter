const sentence = "hello there from lighthouse labs";

const animate = str => {
  let time = 1000 ;
  setTimeout(()=>{
    for (let i=0; i<str.length; i++){
      process.stdout.write(str[i]);
      time += 500 ;         // time = time + 500
      }
  },time);
}

animate(sentence);
