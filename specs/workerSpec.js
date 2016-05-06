/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
 * https://github.com/mdn/simple-web-worker
 */
describe('Web Workers', function() {
  var worker = new Worker('./js/worker.js');

  worker.postMessage(10);

  worker.onmessage = function(e) {
    expect(e.data).toBe(100);
  };
});
