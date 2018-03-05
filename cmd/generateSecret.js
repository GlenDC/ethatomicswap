const crypto = require('crypto')

// Generate random 32byte secret and create SHA256 hash from it 
crypto.randomBytes(32, function(err, buffer) {
    console.log("\nSecret:\t\t\t", buffer.toString('hex'));
    hashedSecret = crypto.createHmac('sha256', buffer)
                         .digest('hex');
    console.log("\Hashed Secret:\t\t", hashedSecret, "\n")
});