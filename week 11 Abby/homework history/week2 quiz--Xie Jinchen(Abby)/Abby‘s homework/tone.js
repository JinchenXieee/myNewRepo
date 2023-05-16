const semicircleSounds = [ 'C', 'D', 'E', 'F', 'G','A', 'B'];
    const synth = new Tone.Synth().toDestination();

    canvas.addEventListener('click', (e) => {
      const x = e.pageX - canvas.offsetLeft;
      const y = e.pageY - canvas.offsetTop;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) > radius[0]) {
        return;
      }
      const clickedIndex = Math.floor((Math.atan2(y - centerY, x - centerX) + Math.PI / 2) / (Math.PI / 3));
      const semicircleSound = semicircleSounds[clickedIndex];
      synth.triggerAttackRelease(`${semicircleSound}4`, '1n');
    });