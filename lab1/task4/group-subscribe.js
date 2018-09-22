const myGroups = []; // массив для хранения подписок на группы

const groupList = [
  { id: 1, groupName: 'Habrahabr'},
  { id: 2, groupName: 'Web2018'},
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(groupId) {
  if (myGroups.indexOf(groupId) >= 0) return false;
  let isExist = false;
  groupList.forEach(function (item) {
    if (item.id === groupId) {
      myGroups.push(groupId);
      isExist = true;
    }
  })
  return isExist;
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(groupId) {
  if (myGroups.indexOf(groupId) >= 0) {
    myGroups.splice(myGroups.indexOf(groupId),1);
    return true;
  }
  return false;
}
