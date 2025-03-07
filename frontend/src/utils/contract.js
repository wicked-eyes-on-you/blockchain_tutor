import { BrowserProvider, Contract } from "ethers";
import contractABI from "../utils/Tutoring.json";

const CONTRACT_ADDRESS = "PASTE_YOUR_CONTRACT_ADDRESS_HERE";

export const getContract = async () => {
    if (!window.ethereum) return null;
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new Contract(CONTRACT_ADDRESS, contractABI.abi, signer);
};
