// 时间格式化
function formatDate(date) {
    if(date == null || date == "") return "";
    var newDate = new Date(date);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1 < 10 ? "0" + newDate.getMonth() + 1 : newDate.getMonth() + 1;
    var day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
    var hours = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
    var minutes = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes();
    var seconds = newDate.getSeconds() < 10 ? "0" + newDate.getSeconds() : newDate.getSeconds();
    return (
        year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
    );
}

function formatTime() {
    
}

function copyText() {
    var text = document.getElementById('text').innerText
    var input = document.getElementById('input')
    input.value = text // 修改文本框的内容
    input.select() // 选中文本
    document.execCommand('copy') // 执行浏览器复制命令
    alert('复制成功')
    // 复制功能利用的是 浏览器对 input 框的功能所实现
}

export {
    formatDate,
    copyText
}

console.log(formatDate("2010/11/16 23:00:00"))