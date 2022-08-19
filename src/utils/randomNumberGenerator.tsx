// Generate random numbers to use as session token
export const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 900000000000000).toString();
};
