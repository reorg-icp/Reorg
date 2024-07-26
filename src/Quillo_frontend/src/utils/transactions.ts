export const requestUserBalance = async () => {
  try {
    const result = (window as any)?.ic?.plug?.requestBalance();
    console.log(result);
  } catch (e: any) {
    console.log(`There was an error ${e}`);
  }
};
export function e8sToIcp(e8s: bigint): number {
  const e8sPerIcp = BigInt(10 ** 8);
  return Number(e8s) / Number(e8sPerIcp);
}
