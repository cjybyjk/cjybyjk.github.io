// 福建教育考试院 高考报名 兼容性脚本
// by cjybyjk
// usage: javascript:document.write("<script src='https://cjybyjk.github.io/fakeCompatibility.js'><\/script>"); 

document.getElementById('eContainer').deleteRow(2);
document.getElementById('eContainer').deleteRow(1);
document.getElementById('eContainer1').deleteRow(2);
document.getElementById('eContainer1').deleteRow(1);
Element.prototype.mergeAttributes = function(src){
    var bPreserve = arguments[1] === undefined ? true : arguments[1],
        attrs = src.attributes,
        i = attrs.length - 1;
    for(;i>=0;i--){
        var name = attrs[i].name;
        if(bPreserve && name.toLowerCase() === 'id')
        continue;
        this.setAttribute(name, attrs[i].value);
    }
}
