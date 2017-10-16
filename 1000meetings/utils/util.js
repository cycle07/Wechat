function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatTimeDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function numJudgment(str) {
  if (str == "") { return true };
  var arr = str.split("");
  var re = /[0-9]/;
  for (var i = 0; i < arr.length; i++) {
    if (!(re.test(arr[i]))) {
      return false;
    }
  }
  return true;
};

function mailJudgment(str) {
  if (str == "") { return true };
  var arr = str.split("");
  var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  if (!(re.test(str))) {
    return false;
  }
  return true;
};

module.exports = {
  formatTime: formatTime,
  formatTimeDate: formatTimeDate,
  numJudgment: numJudgment,
  mailJudgment: mailJudgment
}  