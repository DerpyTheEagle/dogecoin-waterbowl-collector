window.onload = function() {
    var pools = [
	'http://www.cmmonitor.com/doge/',
	'http://cryptospout.com/faucet.php?coin=DOGE',
	'http://www.cryptoblox.com/faucets/DogeCoin/?id=22157',
	'http://dogefaucet.hol.es/',
	'http://steep.rocks/?r=21357',
	'http://www.trendcoin.org/faucet3/index.php?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'http://freedogecoins.bitcoin-source.com/?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'http://freedoge.in.ua/play/ref_10652',
	'http://earnsatoshi.altervista.org/free-dogecoin-faucet/?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'http://dogecoinrewards.com/?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX#sthash.cGNEvWJK.dpuf',
	'http://www.doge.coinracket.com/',
	'http://dogecoin.space/?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'http://free-coin.info/?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'http://doge.kranbitcoin.in/?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'http://makingmoneyhoney.com/index.php?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'http://dogecoin.square7.ch/?r=D8kCjKaDthsDRqqwBKgQG2GFyn35nQPeKX',
	'end.html',
];

    var start = document.getElementById('next');
    var frame = document.getElementById('collectorweb');

    var nextPoolIndex = 0;
    function loadNextPool() {
        var poolSrc = pools[nextPoolIndex];
        nextPoolIndex = (nextPoolIndex + 1) % pools.length;
        frame.src = poolSrc;
	var poolsLeft = pools.length - nextPoolIndex - 1
	document.getElementById("togospan").innerHTML = "Waterbowls Left: " + poolsLeft.toString();
//	window.alert(poolsLeft)
    }


    start.addEventListener('click', function() {
        loadNextPool();
    }, false);
}
