window.onload = function() {
    var delay = 1000;
    var pools = [
        'http://www.indogewetrust.com/',
        'http://www.thebitcoinmaster.com/dogecoin/',
        'http://cryptospout.com/faucet.php?coin=DOGE',
        'http://doge.freefaucet.com.ar/',
        'http://wowsuchfaucet.com.ar/',
        'http://dogedroppings.com/',
        'http://spicydoge.com/',
        'http://freedoge.co.in/',
        'http://dry67.us/faucet.php?coin=DOGE',
        'http://euh55.us/faucet.php?coin=DOGE',
        'http://35and.us/faucet.php?coin=DOGE',
        'http://gft45.us/faucet.php?coin=DOGE',
        'http://dod44.us/faucet.php?coin=DOGE',
        'http://key02.us/faucet.php?coin=DOGE',
        'http://dmadma.us/faucet.php?coin=DOGE',
        'http://spout78.us/faucet.php?coin=DOGE',
        'http://hand56.us/faucet.php?coin=DOGE',
        'http://hunger14.us/faucet.php?coin=DOGE',
        'http://ragen98.us/faucet.php?coin=DOGE',
        'http://jsajsa.us/faucet.php?coin=DOGE',
        'http://jesus1457.com/faucet.php?coin=DOGE',
        'http://cryptotide.com/faucet.php?coin=DOGE',
        'http://www.dogefaucet.com/',
        'http://bitcoinmafia.com/bitcoin-mafias-free-dogecoin-faucet/',
        'http://shibeunited.web44.net/',
        'http://www.thedogebowl.com/',
        'http://wow.bitcoinproject.net/',
        'end.html',
];

    var start = document.getElementById('next');
    var frame = document.getElementById('collectorweb');

    var nextPoolIndex = 0;
    function loadNextPool() {
        var poolSrc = pools[nextPoolIndex];
        nextPoolIndex = (nextPoolIndex + 1) % pools.length;
        frame.src = poolSrc;
    }

    start.addEventListener('click', function() {
        loadNextPool();
    }, false);
}
