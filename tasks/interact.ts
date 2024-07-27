import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { parseUnits } from "@ethersproject/units";
import { getAddress } from "@zetachain/protocol-contracts";
import { prepareData, ZetaChainClient } from "@zetachain/toolkit/client";
import { utils, ethers } from "ethers";
import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json";

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  const [signer] = await hre.ethers.getSigners();
  const client = new ZetaChainClient({ network: "testnet", signer });

  const data = prepareData(
    args.contract,
    ["address"],
    [args.recipient]
  );

  let decimals = 18;

  if (args.erc20) {
    const contract = new ethers.Contract(args.erc20, ERC20.abi, signer);
    decimals = await contract.decimals();
  }

  const value = ethers.utils.parseUnits(args.amount, decimals);

  let tx;

  if (args.erc20) {
    const custodyAddress = getAddress("erc20Custody", hre.network.name as any);
    if (!custodyAddress) {
      throw new Error(
        `No ERC20 Custody contract found for ${hre.network.name} network`
      );
    }

    const custodyContract = new ethers.Contract(
      custodyAddress,
      ERC20.abi,
      signer
    );
    const tokenContract = new ethers.Contract(args.erc20, ERC20.abi, signer);
    const approve = await tokenContract.approve(custodyAddress, value);
    await approve.wait();

    tx = await custodyContract.deposit(signer.address, args.erc20, value, data);
    await tx.wait();
  } else {
    const to = getAddress("tss", hre.network.name as any);
    tx = await signer.sendTransaction({ data, to, value });
  }

  if (args.json) {
    console.log(JSON.stringify(tx, null, 2));
  } else {
    console.log(`Using account: ${signer.address}\n`);

    console.log(`Successfully minted a cross chain NFT  by ${hre.network.name} network.
📝 Transaction hash: ${tx.hash}
  `);
  }
};

task("interact", "Interact with the contract", main)
  .addParam("contract", "The address of a universal app contract on ZetaChain")
  .addParam("amount", "Amount of tokens to send")
  .addOptionalParam("erc20", "Send an ERC-20 token")
  .addFlag("json", "Output in JSON")
  .addParam("recipient");
