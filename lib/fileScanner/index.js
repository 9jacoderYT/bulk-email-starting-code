import { isEmail } from "../validation";

const scanFile = (file) => {
  const fileContent = file.split(/\r?\n?\s/);
  let contactList = [];
  for (let i = 0; i < fileContent.length; i++) {
    if (isEmail(fileContent[i])) {
      contactList.push(fileContent[i]);
    }
  }
  return contactList;
};

export const fileScannerEmail = (file) => {
  // Validate File
  var fileExt = file.name.split(".").pop().toLowerCase();

  if (fileExt !== "txt") {
    return "Please upload only .txt files";
  }

  let contacts = [];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    console.log(scanFile(reader.result.trim()));
  };
  reader.onerror = () => {
    console.log("file error", reader.error);
  };

  console.log(contacts);
};

export const fileScannerEmailReceiverName = (file) => {
  return "success";
};

export const fileScannerEmailReceiverSenderName = (file) => {
  return "success";
};
