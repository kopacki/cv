let _personalDataValue;

function _asSection(name, type, memebers) {
  return {
    name: name,
    type: type,
    memebers: memebers
  };
}

function _getDataForKeys(...keys) {
  const data = [];

  for(let key of keys) {
    try {
      let value = _getDataForKey(key);
      data.push(value);
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
    const cvData = [];

    const personalData = _getDataForKeys('firstName', 'lastName', 'address', 'birthDay', 'email', 'phone');
    const education = _getDataForKeys('education');
    const experience = _getDataForKeys('experience');
    const foreignLanguages = _getDataForKeys('foreignLanguages');
    const additionalCourses = _getDataForKeys('additionalCourses');
    const knowledgeAndSkills = _getDataForKeys('knowledgeAndSkills');
    const hobby = _getDataForKeys('hobby');

    cvData.push(_asSection('Personal data', 'dl', personalData));
    cvData.push(_asSection('Dducation', 'dl', education));
    cvData.push(_asSection('Experience', 'dl', experience));
    cvData.push(_asSection('Foreign languages', 'dl', foreignLanguages));
    cvData.push(_asSection('Additional courses', 'dl', additionalCourses));
    cvData.push(_asSection('Knowledge & skills', 'dl', knowledgeAndSkills));
    cvData.push(_asSection('Hobby', 'ul', hobby));

    return cvData;
  }
}

CvService.$inject = ['PersonalDataValue'];

export default CvService;