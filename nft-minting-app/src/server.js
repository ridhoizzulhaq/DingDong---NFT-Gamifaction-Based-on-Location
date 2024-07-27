const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 5001;

app.use(express.json());

app.post('/claim-nft', (req, res) => {
  console.log('Received request to claim NFT');
  const command = 'npx hardhat interact --contract 0xad90207213b8c73e0776f9dd10432d14b898a87f --amount 0 --network bsc_testnet --recipient 0x4f41504b4712E7cCF69B63c27Ef3204Cf35FB8ca';
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      res.status(500).json({ success: false, message: error.message });
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      res.status(500).json({ success: false, message: stderr });
      return;
    }
    console.log(`Command stdout: ${stdout}`);
    res.json({ success: true, message: stdout });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Endpoint to handle NFT claim requests
app.post('/claim-nft', (req, res) => {
  console.log('Received request to claim NFT');
  const command = 'npx hardhat interact --contract 0xad90207213b8c73e0776f9dd10432d14b898a87f --amount 0 --network bsc_testnet --recipient 0x4f41504b4712E7cCF69B63c27Ef3204Cf35FB8ca';
  const { latitude, longitude } = req.body;
  // Your logic to handle the claim NFT request
  res.json({ success: true, message: 'NFT Claimed Successfully!' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
