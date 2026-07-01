import journey2QuitSection1 from '../data/journey2quit/section1.json';

export const documentLibrary = {
  "Journey2Quit": {
    "name": "Journey2Quit Workbook",
    "versions": {
      "V1 Side by side": journey2QuitSection1,
      "V1 fully translated": journey2QuitSection1
    }
  }
};

export const addDocumentToLibrary = (key, data) => {
  documentLibrary[key] = data;
};
