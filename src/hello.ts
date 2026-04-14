export const greeter = async () => {
  return new Promise<void>((resolve) => {
    console.log("hello world");

    resolve();
  });
};
