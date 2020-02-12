document.querySelector('button').addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
});


let sampler = new Tone.Player({
    playbackRate : 1,
    loop : true,
    autostart : true ,
    loopStart : 0,
    loopEnd : 0,
    reverse : false,
    fadeIn : 0,
    fadeOut : 0
    }).toMaster();


sampler.load('./cuckoo_drums.mp3',()=>{
    console.log(sampler.buffer.duration);
})


   
    

