const myGroups = []; // массив для хранения подписок на группы

const groupList = [
  { groupName: 'Habrahabr'},
  { groupName: 'Web2018'},
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(groupId) {
  let isExists = false;
  if (groupList.length > groupId && myGroups.indexOf(groupId) < 0) {
    myGroups.push(groupId);
    isExists = true;
  }
  if (!isExists) {
    return false;
  } else {
    return true;
  }
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(groupId) {
  if (myGroups.length > 0 && myGroups.indexOf(groupId) >= 0) {
    myGroups.splice(myGroups.indexOf(groupId),1);
    return true;
  } else {
    return false;
  }
}
