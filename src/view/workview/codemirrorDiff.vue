<template>
    <div>
        <div id="code-diff-box"></div>
    </div>
</template>
<script>
import CodeMirror from 'codemirror';
import YAML from 'yaml';
import DiffMatchPatch from 'diff-match-patch'; //需要用该工具进行对比，必须引入
import "codemirror/theme/neat.css"; //主题css
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/yaml/yaml'
import 'codemirror/addon/merge/merge.js'
import 'codemirror/addon/merge/merge.css'
window.diff_match_patch = DiffMatchPatch
window.DIFF_DELETE = -1
window.DIFF_INSERT = 1
window.DIFF_EQUAL = 0
export default {
  data() {
    return {
      
    };
  },
  mounted(){
    let target = document.getElementById("code-diff-box");
    target.innerHTML = "";
    let old = '{"number":{ "name": "cxh", "sex": { "name": "cxh", "sex": "man" } }, "plain":"string", "block":[true, false, "maybe", null]}';
    let oldStr = YAML.stringify(JSON.parse(old));
    let news = '{"number":{ "name": "cxh", "sex": { "name": "cxc", "sex": "man" } }, "plain":"string", "block":[true, false, "maybe", null]}';
    let newStr = YAML.stringify(JSON.parse(news));
    this.Editor = CodeMirror.MergeView(target, {
        theme:"neat",
        value:oldStr,//配置文件内容 - 在右侧
        origRight: null,
        orig: newStr,//编辑后返回内容 - 在左侧
        lineNumbers: true,//显示行号
        mode: "text/html",
        highlightDifferences: true,
        connect: 'align',
        readOnly: false,//只读
        allowEditingOriginals: true,
    });
  },
};
</script>
<style>
.CodeMirror-merge, .CodeMirror-merge .CodeMirror {
    height: 515px;
}
.CodeMirror-merge-right{
    left: 0px
}
.CodeMirror-merge-gap{
    left: 47%;
}
.CodeMirror-merge-editor{
    position: absolute;
    right: 0;
}
.CodeMirror-merge-copy{
    transform: rotateY(180deg); 
}
</style>