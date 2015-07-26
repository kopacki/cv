let _personalDataValue;

function _getDataForKeys(...keys) {
  const data = {};

  for(let key of keys) {
    try {
      let value = _getDataForKey(key);
      data[key] = value;
    } catch (e) {
      console.error(e.message);
    }
  }

  return data;
}

function _getDataForKey(key) {
  const data = _personalDataValue[key];

  if(!data) {
    throw Error(`Key ${key} does not exists in personal data store`);
  }

  return data;
}

class CvService {
  constructor(personalDataValue) {
    _personalDataValue = personalDataValue;
  }

  getCvData() {
    const cvData = {
      personalData: _getDataForKeys('firstName', 'lastName', 'address', 'birthDay', 'email', 'phone'),
      education: _getDataForKeys('education'),
      experience: _getDataForKeys('experience'),
      foreignLanguages: _getDataForKeys('foreignLanguages'),
      additionalCourses: _getDataForKeys('additionalCourses'),
      knowledgeAndSklills: _getDataForKeys('knowledgeAndSklills'),
      hobby: _getDataForKeys('hobby')
    };

    return cvData;
  }
}

CvService.$inject = ['PersonalDataValue'];

export default CvService;