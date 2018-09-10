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
  let exists = false;
  groupList.forEach(function(item){
    if (item.groupName === group) {
      myGroups.push(group);
      exists = true;
    }
  });
  if (!exists) alert("Такой группы не существует");
}

/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(group) {
  if ((myGroups.length > 0) && (myGroups.indexOf(group) >= 0)) {
    myGroups.splice(myGroups.indexOf(group), 1);
  } else {
    alert("Вы не подписаны на данную группу");
  }
}
