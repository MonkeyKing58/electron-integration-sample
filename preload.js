const { contextBridge, ipcRenderer } = require("electron");
const tsvb = require("./libs/win/tsvb");

//const tsvb = require("./libs/linux/TSVB");
//const tsvb = require("./libs/mac/tsvb");

const inference = new tsvb.InferenceSession();

// Define window.root_path
contextBridge.exposeInMainWorld("root_path", __dirname);

contextBridge.exposeInMainWorld("inferer", {
  run: (data) => {
    return inference.run(data);
  },
  configure: (data) => {
    return inference.configure(data);
  },
  auth: (data) => {
    return inference.auth(data);
  },
  setPreset: (preset) => {
    inference.setPreset(preset);
  },
});
