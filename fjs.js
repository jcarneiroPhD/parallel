onmessage = function (e) {
    console.log(e.data);
    this.postMessage("OMG");
}
