onmessage = function(e) {
  console.log('Worker Event', e);
  postMessage(e.data * e.data);
}
