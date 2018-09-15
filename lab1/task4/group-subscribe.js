const myGroups = []; // массив для хранения подписок на группы

const groupList = [
  { groupName: 'Habrahabr'},
  { groupName: 'Web2018'},
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(group) {
  let isExists = false;
  groupList.forEach(function(item){
    if (item.groupName === group) {
      myGroups.push(group);
      exists = true;
    }
  });
  if (!exists) {
    return false;
  } else {
    return true;
  }
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(group) {
  if ((myGroups.length > 0) && (myGroups.indexOf(group) >= 0)) {
    return true;
  } else {
    return false;
  }
}
