// implement function that creates new file fresh.txt with content I am fresh and young
// inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
  // Write your code here
  const filePath = path.join(__dirname, "files", "fresh.txt");
  const fileContent = "I am fresh and young";
};

await create();
