function Ship(currentPort) {
    this.currentPort = currentPort;

}

Ship.prototype.setSail = function() {
    this.currentPort = Boolean(false) 
}
Ship.prototype.dock = function(port) { 
   this.currentPort = port;
}


module.exports = Ship;