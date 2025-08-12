async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with account:", deployer.address);
  
    const MessageStore = await ethers.getContractFactory("MessageStore");
    const initial = "Hello from Hardhat!";
    const deployed = await MessageStore.deploy(initial);
    await deployed.deployed();
  
    console.log("MessageStore deployed to:", deployed.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
  