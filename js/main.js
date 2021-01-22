function getEle(id) {
    return document.getElementById(id);
}

var objTask = new ListTask();
getLocalStorage(objTask.arr);
/**
 * lấy thông tin
 */

getEle("addItem").addEventListener("click", function () {
    var _taskname = getEle("newTask").value;
    /**
     * Thêm task
     */

    objTask.add(_taskname);
    taoBang(objTask.arr);
    setLocalStorage(objTask.arr);


});
function taoBang(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        content += `
<li>
${arr[i]}
<div class="buttons">
<button onclick="xoaTask()" class="remove"><i class="fas fa-trash-alt"></i></button>
<button onclick="completeTask()" class="complete"><i class="far fa-check-square"></i></button></div>
</li>
        `;
    }
    getEle("todo").innerHTML = content;
}
function xoaTask(_taskname) {
    objTask.xoaTask(_taskname)
    taoBang(objTask.arr)
    setLocalStorage();
}
function completeTask(_taskname) {
    console.log("abc")
}
/**
 * Luu danh sach len localStorage
 */
function setLocalStorage() {

    var arrString = JSON.stringify(objTask.arr);
    localStorage.setItem("objTask", arrString);
}
function getLocalStorage() {
    if (localStorage.getItem("objTask")) {
        objTask.arr = JSON.parse(localStorage.getItem("objTask"));
        taoBang(objTask.arr);
    }
}
