'use strict';

{
  const setWord=()=>{
    word=words.splice(Math.floor(Math.random()*words.length),1)[0];
    target.textContent=word;
    loc=0;
  };

  const words=[
    'red',
    'blue',
    'pink'
  ];

  let word;
  let startTime;
  let loc=0;
  let isPlaying=false;
  const target=document.getElementById('target');

  document.addEventListener('click',()=>{
    if(isPlaying===true){
      return;
    }

    isPlaying=true;
    startTime=Date.now();
    setWord();
  });

  document.addEventListener('keydown',(e)=>{
    if(e.key!==word[loc]){
      return;
    }

    loc++;
    target.textContent='_'.repeat(loc)+word.substring(loc);

    if(loc===word.length){
      if(words.length){
        const elapsedTime=((Date.now-startTime)/1000).toFixed(2);
        const result=document.getElementById('result');
        result.textContent=`Finished! ${elapsedTime} seconds!`;
        return;
      }

      setWord();
    }
  });
}