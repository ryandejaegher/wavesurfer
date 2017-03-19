var ctx = document.createElement('canvas').getContext('2d');
var linGrad = ctx.createLinearGradient(0, 64, 0, 200);
linGrad.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

var wavesurfer = WaveSurfer.create({
    // Use the id or class-name of the element you created, as a selector
    container: '#waveform',
    // The color can be either a simple CSS color or a Canvas gradient

    progressColor: 'hsla(200, 100%, 30%, 0.8)',
    cursorColor: 'blue',
    // This parameter makes the waveform look like SoundCloud's player
    barWidth: 3,
    cursorWidth: 2,
    fillParent: true,
    scrollParent: false
});

wavesurfer.on('loading', function(percents) {
    document.getElementById('progress').value = percents;
});

wavesurfer.on('ready', function(percents) {
    document.getElementById('progress').style.display = 'none';
});

wavesurfer.load('key.wav');

var ctx1 = document.createElement('canvas').getContext('2d');
var linGrad1 = ctx1.createLinearGradient(0, 64, 0, 200);
linGrad.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

var wavesurfer1 = WaveSurfer.create({
    // Use the id or class-name of the element you created, as a selector
    container: '#waveform-1',
    // The color can be either a simple CSS color or a Canvas gradient

    progressColor: 'hsla(400, 100%, 30%, 0.8)',
    cursorColor: 'blue',
    // This parameter makes the waveform look like SoundCloud's player
    barWidth: 3,
    cursorWidth: 2,
    fillParent: true,
    scrollParent: false
});

wavesurfer1.on('loading', function(percents) {
    document.getElementById('progress-1').value = percents;
});

wavesurfer1.on('ready', function(percents) {
    document.getElementById('progress-1').style.display = 'none';
});

wavesurfer1.load('drum.wav');

var ctx2 = document.createElement('canvas').getContext('2d');
var linGrad2 = ctx2.createLinearGradient(0, 64, 0, 200);
linGrad.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
linGrad.addColorStop(0.5, 'rgba(183, 40, 183, 1.000)');

var wavesurfer2 = WaveSurfer.create({
    // Use the id or class-name of the element you created, as a selector
    container: '#waveform-2',
    // The color can be either a simple CSS color or a Canvas gradient

    progressColor: 'hsla(100, 100%, 30%, 0.8)',
    cursorColor: 'blue',
    // This parameter makes the waveform look like SoundCloud's player
    barWidth: 3,
    cursorWidth: 2,
    fillParent: true,
    scrollParent: false
});

wavesurfer2.on('loading', function(percents) {
    document.getElementById('progress-2').value = percents;
});

wavesurfer2.on('ready', function(percents) {
    document.getElementById('progress-2').style.display = 'none';
});

wavesurfer2.load('pad.wav');

var ctx3 = document.createElement('canvas').getContext('2d');
var linGrad3 = ctx3.createLinearGradient(0, 64, 0, 200);
linGrad.addColorStop(0.5, 'rgba(255, 255, 255, 1.000)');
linGrad.addColorStop(0.5, 'rgba(183, 183, 183, 1.000)');

var wavesurfer3 = WaveSurfer.create({
    // Use the id or class-name of the element you created, as a selector
    container: '#waveform-3',
    // The color can be either a simple CSS color or a Canvas gradient

    progressColor: 'hsla(0, 100%, 30%, 0.8)',
    cursorColor: 'blue',
    // This parameter makes the waveform look like SoundCloud's player
    barWidth: 3,
    cursorWidth: 2,
    fillParent: true,
    scrollParent: false
});

wavesurfer3.on('loading', function(percents) {
    document.getElementById('progress-3').value = percents;
});

wavesurfer3.on('ready', function(percents) {
    document.getElementById('progress-3').style.display = 'none';
});

wavesurfer3.load('lead.wav');

function playAll() {
  wavesurfer.playPause();
  wavesurfer1.playPause();
  wavesurfer2.playPause();
  wavesurfer3.playPause();
}

function restartAll() {
  wavesurfer.seekTo(0);
  wavesurfer1.seekTo(0);
  wavesurfer2.seekTo(0);
  wavesurfer3.seekTo(0);
}

function stopAll() {
  wavesurfer.stop();
  wavesurfer1.stop();
  wavesurfer2.stop();
  wavesurfer3.stop();
}
