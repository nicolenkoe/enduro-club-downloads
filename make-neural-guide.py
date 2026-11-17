import pathlib,subprocess,json,wave,urllib.request
root=pathlib.Path(__file__).resolve().parent;work=root/'voice-build';work.mkdir(exist_ok=True)
name='ru_RU-irina-medium';base='https://huggingface.co/rhasspy/piper-voices/resolve/main/ru/ru_RU/irina/medium/'
for suffix in ['.onnx','.onnx.json']:urllib.request.urlretrieve(base+name+suffix,work/(name+suffix))
for i in [1,2,4,5]:
 text=(root/'guide-source'/f'voice{i}.txt').read_text();wav=work/f'voice{i}.wav'
 subprocess.run(['python3','-m','piper','-m',str(work/(name+'.onnx')),'-f',str(wav),'--length-scale','1.12'],input=text.encode(),check=True)
 with wave.open(str(wav)) as w:duration=w.getnframes()/w.getframerate()+0.7
 subprocess.run(['ffmpeg','-y','-loglevel','error','-loop','1','-framerate','10','-i',str(root/'guide-source'/f'scene{i}.png'),'-i',str(wav),'-vf','scale=1920:1080,format=yuv420p','-c:v','libx264','-preset','veryfast','-crf','25','-c:a','aac','-b:a','128k','-af','loudnorm=I=-16:TP=-1.5:LRA=11,apad=pad_dur=0.7','-t',str(duration),str(work/f'part{i}.mp4')],check=True)
(work/'concat.txt').write_text(''.join(f"file 'part{i}.mp4'\n" for i in [1,2,4,5]))
subprocess.run(['ffmpeg','-y','-loglevel','error','-f','concat','-safe','0','-i',str(work/'concat.txt'),'-c','copy','-movflags','+faststart',str(root/'site/guide.mp4')],check=True)
(root/'site/voice-info.json').write_text(json.dumps({'voice':'Ирина','engine':'Piper neural','locale':'ru-RU','female':True,'audience':'player'},ensure_ascii=False))
