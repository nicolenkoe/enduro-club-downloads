/** Certificate output from both legacy Android build-tools and SDK 37+. */
export function signerFingerprints(output){
 return [...output.matchAll(/^(?:Signer #\d+|V\d+(?:\.\d+)* Signer):? certificate SHA-256 digest:\s*([a-f\d]{64})\s*$/gim)].map(match=>match[1].toLowerCase());
}
