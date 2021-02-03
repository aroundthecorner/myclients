/**
 * Send log to universal logger
 */
window.log_msg = async function (message)
{
    let formattedMessage = JSON.stringify(message, null, 4)
    formattedMessage = formattedMessage.replace(/^"(.+)"$/,'$1');

    await fetch(`https://log.martinsz.lv/api/add-log`, {
        method: 'POST',
        
        body: JSON.stringify({
            log: formattedMessage,
            secret_key: 'QETCY!!U@KnL_k4TNKMHV*Nq7z9s',    
        }),

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

/**
 * String limit
 */
String.prototype.limit = function(n) {
    return this.substr(0, n-1) + (this.length + 1 > n ? '...' : '')
}