function checkTime(val) {
    return val < 10 ? '0' + val : val
}
/**
 * 时间格式化
 * @param  {String} fmt 格式化时间的格式
 * @return {String}     格式化后的时间
 */
function timeFormat(fmt = "YY/MM/DD hh:mm:ss") {
    return String(fmt).replace(/([YMDhms])\1*/g, (regexp, $1) => {
        var val;
        switch ($1) {
            case 'Y':
                val = this.getFullYear();
                break;
            case 'M':
                val = this.getMonth() + 1;
                break;
            case 'D':
                val = this.getDate();
                break;
            case 'h':
                val = this.getHours();
                break;
            case 'm':
                val = this.getMinutes();
                break;
            case 's':
                val = this.getSeconds();
                break;
        }
        return regexp.length === 2 ? checkTime(val) : val
    })
}
Date.prototype.format = timeFormat;

export default timeFormat;