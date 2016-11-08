var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE5YzdhODJmYjc0ZDAwMTFiZTg2MjMiLCJ1c2VybmFtZSI6Imxlbm80a2FfbW9pc2VldmFAbWFpbC5ydSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNDc4MTEwOTQyfQ.OFaEmLlAIU8CXuvG3wA2p5yUfe7mrZ6eN0QZKP8VhUA';
var skb = new Skb(token);
skb.taskHelloWorld('Привет!!!!!!!!!!!');