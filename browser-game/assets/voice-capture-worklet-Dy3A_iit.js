class VoiceCapture extends AudioWorkletProcessor {
 constructor(){super();this.samples=[];this.position=0;this.ratio=sampleRate/16000;}
 process(inputs){const input=inputs[0]?.[0];if(!input)return true;for(let i=0;i<input.length;i++){this.position++;if(this.position>=this.ratio){this.position-=this.ratio;this.samples.push(input[i]);if(this.samples.length===640){const pcm=new Int16Array(640);for(let j=0;j<640;j++)pcm[j]=Math.round(Math.max(-1,Math.min(1,this.samples[j]))*32767);this.port.postMessage(pcm.buffer,[pcm.buffer]);this.samples=[];}}}return true;}
}
registerProcessor('enduro-voice-capture',VoiceCapture);
