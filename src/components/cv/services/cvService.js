let _personalDataValue;

function _asCvSection(name, type, members) {
  return {
    name: name,
    type: type,
    members: members
  };
}

function _getDataForKeys(...keys) {
  let data = [];

  for(let key of keys) {
    try {
      let value = _getDataForKey(key);

      if(Array.isArray(value)) {
        data = data.concat(value);
      } else {
        data.push(value);        
      }
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

    cvData.push(_asCvSection('Personal data', 'dl', personalData));
    cvData.push(_asCvSection('Education', 'dl', education));
    cvData.push(_asCvSection('Experience', 'dl', experience));
    cvData.push(_asCvSection('Foreign languages', 'dl', foreignLanguages));
    cvData.push(_asCvSection('Additional courses', 'dl', additionalCourses));
    cvData.push(_asCvSection('Knowledge & skills', 'dl', knowledgeAndSkills));
    cvData.push(_asCvSection('Hobby', 'ul', hobby));

    return cvData;
  }
}

CvService.$inject = ['PersonalDataValue'];

export default CvService;