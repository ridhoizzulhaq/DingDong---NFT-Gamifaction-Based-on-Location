const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 5001;

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post('/claim-nft', (req, res) => {
  console.log('Received request to claim NFT');
  const command = 'npx hardhat interact --contract 0xad90207213b8c73e0776f9dd10432d14b898a87f --amount 0 --network bsc_testnet --recipient 0x4f41504b4712E7cCF69B63c27Ef3204Cf35FB8ca';

  // Set the working directory to the same directory as the current script
  const options = { cwd: path.join(__dirname) };

  exec(command, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ignoring error: ${error.message}`);
    }
    if (stderr) {
      console.error(`Ignoring stderr: ${stderr}`);
    }
    console.log(`Command stdout: ${stdout}`);
    res.json({ success: true, message: stdout });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
