
/*
* js验证模块
*/
export default {
  testStrs: {
    isNull: /^[ ]+$/,
    isPrice: /^[0-9]*\.*[0-9]{0,2}$/,
    isWeight: /^[0-9]*\.*[0-9]{0,1}$/,
    isPercent: /^[-]{0,1}[0-9]*\.*[0-9]{0,1}$/,
    isInteger: /^[-]{0,1}[0-9]{1,}$/,
    checkMobile: /^1\d{10}$/, ///^1[3|4|5|7|8|9][0-9]{9}$/;
    isNumber: /^[0-9]+$/,
    isDecimal: /^[-]{0,1}(\d+)[\.]+(\d+)$/,
    isEmail: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    isNumberOrAlpha: /^[0-9a-zA-Z]+$/,
    isValidValue: /^[0-9]*\.*[0-9]+$/,
    isNumberOr_Letter: /^[0-9a-zA-Z\_]+$/,
    isNumberOrLetter: /^[0-9a-zA-Z]+$/,
    isChinaOrNumbOrLett: /^[0-9a-zA-Z\u4e00-\u9fa5]+$/,
    isLikeEmoji: /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g
  },
  /*
    * 用途：检查输入字符串是否为空或者全部都是空格 输入：str 返回： 如果全是空返回true,否则返回false
    */
  isNull: function (str) {
    if (str == "")
      return true;
    var regu = this.testStrs.isNull;
    var re = new RegExp(regu);
    return re.test(str);
  },
  /**
   * 判断是否输入金额
   * @param str
   */
  isPrice: function (str) {
    var regu = this.testStrs.isPrice;
    return regu.test(str);
  },

  /**
   * 判断是否输入重量
   * @param str
   */
  isWeight: function (str) {
    var regu = this.testStrs.isWeight;
    return regu.test(str);
  },

  /**
   * 判断是否输入百分数
   * @param str
   */
  isPercent: function (str) {
    var regu = this.testStrs.isPercent;
    return regu.test(str);
  },

  /*
    * 用途：检查输入对象的值是否符合整数格式 输入：str 输入的字符串 返回：如果通过验证返回true,否则返回false
    *
    */
  isInteger: function (str) {
    var regu = this.testStrs.isInteger;
    return regu.test(str);
  },

  /*
    * 用途：检查输入手机号码是否正确 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
    *
    */
  checkMobile: function (s) {
    var regu = this.testStrs.checkMobile;
    var re = new RegExp(regu);
    if (re.test(s)) {
      return true;
    }
    return false;
  },
  /*
    * 用途：检查输入字符串是否符合正整数格式 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
    *
    */
  isNumber: function (s) {
    var regu = this.testStrs.isNumber;
    var re = new RegExp(regu);
    if (s.search(re) != -1) {
      return true;
    }
    return false;
  },
  /*
    * 用途：检查输入字符串是否是带小数的数字格式,可以是负数 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
    *
    */
  isDecimal: function (str) {
    if (isInteger(str))
      return true;
    var re = this.testStrs.isDecimal;
    if (re.test(str)) {
      if (RegExp.$1 == 0 && RegExp.$2 == 0)
        return false;
      return true;
    }
    return false;
  },

  /*
    * 用途：检查输入对象的值是否符合E-Mail格式 输入：str 输入的字符串 返回：如果通过验证返回true,否则返回false
    *
    */
  isEmail: function (str) {
    var myReg = this.testStrs.isEmail;
    if (myReg.test(str))
      return true;
    return false;
  },
  /*
    * 用途：检查输入字符串是否只由英文字母和数字和下划线组成 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
    *
    */
  isNumberOr_Letter: function (s) {// 判断是否是数字或字母
    var regu = this.testStrs.isNumberOr_Letter;
    var re = new RegExp(regu);
    if (re.test(s)) {
      return true;
    }
    return false;
  },
  /*
    * 用途：检查输入字符串是否只由英文字母和数字组成 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
    *
    */
  isNumberOrLetter: function (s) {// 判断是否是数字或字母
    var regu = this.testStrs.isNumberOrLetter;
    var re = new RegExp(regu);
    if (re.test(s)) {
      return true;
    }
    return false;
  },
  /*
    * 用途：检查输入字符串是否只由汉字、字母、数字组成 输入： value：字符串 返回： 如果通过验证返回true,否则返回false
    *
    */
  isChinaOrNumbOrLett: function (s) {// 判断是否是汉字、字母、数字组成
    var regu = this.testStrs.isChinaOrNumbOrLett;
    var re = new RegExp(regu);
    if (re.test(s)) {
      return true;
    }
    return false;
  },
  /*
  * 是否包含emoji 输入： value：字符串 返回： 如果通过验证返回true,否则返回false
  * */
  isLikeEmoji(s) {
    var regu = this.testStrs.isLikeEmoji;
    var re = new RegExp(regu);
    if (re.test(s)) {
      return true;
    }
    return false;
  }
}

