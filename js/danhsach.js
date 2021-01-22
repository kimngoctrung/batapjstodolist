function ListTask(taskName) {
    this.arr = [];
    this.add = function (task) {
        this.arr.push(task)
    }
    this.xoaTask = function (input) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].input === input) {
                this.arr.splice(i, 1);
                break;
            }
        }
    }
    this.completedTask = function (input) {

    }
}