const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);

const exList = [
    //{"name":"多个用户信息","path":"user.json"},
    //{"name":"单个用户信息","path":"oneuser.json"},
    //{"name":"用户信息列表","path":"users.json"}
    {"name":"页面信息","path":"pageData.json"}
];


const runAjax = function(exPath) {
    console.log("RUN " + exPath.name + ", path: " + exPath.path);
    $.ajax({
        url: 'https://raw.githubusercontent.com/nuaaqy/ex/master/'+exPath.path,
        type: 'get',
        success: function(rs) {
            console.log(exPath.name);
            console.log(rs);    
        },
        error: function(a,b,c) {
            console.log("error");
        }
    });
}

exList.forEach(v => runAjax(v));