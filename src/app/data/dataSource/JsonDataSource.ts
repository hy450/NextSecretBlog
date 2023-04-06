import path from "path";
import { promises as fs } from "fs";

// This is a data source that read data from a JSON file
class JsonDataSource {
  jsonPaths: string[];

  constructor(jsonPaths: string[]) {
    this.jsonPaths = jsonPaths;
  }

  // Read data from a JSON file
  readData = async () => {
    //const filePath = path.join(process.cwd(),"data",'blogs.json')
    const filePath = path.join(process.cwd(), ...this.jsonPaths);
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  };
}

export default JsonDataSource;
