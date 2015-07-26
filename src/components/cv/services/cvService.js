//#region Private members

let _personalDataValue;
let _qService;

function getDataForKeys(...keys) {
  const data = new WeakMap();

  for(let key of keys) {
    try {
      let value = getDataForKey(key);

      data.set(key, value);
    } catch (e) {
      console.error(e.message);
    }
  }

  return data;
}

function getDataForKey(key) {
  const data = _personalDataValue[key];

  if(!data) {
    throw Error(`Key ${key} does not exists in personal data store`);
  }

  return data;
}

//#endregion Private members

class CvService {
  constructor(personalDataValue, qService) {
    _personalDataValue = personalDataValue;
    _qService = qService;
  }

  getBasicInformation() {
    const basicInformationPromise = getDataForKeys('firstName', 'lastName', 'address', 'birthDay', 'email', 'phone');

    return basicInformationPromise;
  }
}

CvService.$inject = ['PersonalDataValue', '$q'];

export default CvService;