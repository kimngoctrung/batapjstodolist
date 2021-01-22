function Validation() {
    this.kiemTraRong = function (input, mess) {
        if (input === "") {
            alert(mess)
            return false;
        }
        return true;
    }
    this.kiemTraTrung = function (input, mess,) {
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (input === arr[i].length) {
                status = false;
                break;
            }
        } if (status) {
            getEle(spanId).innerHTML = "";
            return false;
        }
        getEle(spanId).innerHTML = mess;
        return true
    }
}