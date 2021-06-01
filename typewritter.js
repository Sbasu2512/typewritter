const sentence = "hello there from lighthouse labs";

const animate = str => {
  let time = 1000 ;
  setTimeout(()=>{
    for (let ele of str){
      process.stdout.write(ele);
      time = time + 500 ;
      }
  },time);
}

animate(sentence);
