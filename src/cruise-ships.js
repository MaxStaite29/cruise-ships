function Ship(startingPoint) {
    this.startingPoint = startingPoint;

}

Ship.prototype.setSail = function() {
    this.startingPoint = Boolean(false) 
}

module.exports = Ship;