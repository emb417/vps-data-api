import fetch from "node-fetch";

class VPSDataHelper {
  constructor() {}

  async getJson() {
    const res = await fetch(
      "https://virtualpinballspreadsheet.github.io/vps-db/db/vpsdb.json"
    );
    const json = await res.json();
    return json;
  }
}

export default VPSDataHelper;
