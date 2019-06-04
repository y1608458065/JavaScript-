window.onload = function () {
    var button = document.getElementsByTagName("button")                 //获取按钮元素
    for (let i = 0; i < button.length; i++) {                            //循环绑定事件
        button[i].addEventListener("click", function () {                //绑定事件
            if (this.className) {                                        //如果有标签名则清除
                this.className = "";                                     //清除标签名

                var img = document.getElementsByTagName("img")[0];           //获取img删除
                img.parentNode.removeChild(img);                             //删除
                var jsimg = document.getElementsByClassName("jsimg")[0];     //获取img父元素
                img = document.createElement("img") ;                        //创建新img元素
                jsimg.appendChild(img);                                      //插入img

            } else {                                                     //否则改变标签名
                for (let j = 0; j < button.length; j++) {                //取消其他标签名
                    button[j].className = "";                            //取消标签名
                }
                this.className = "triggerButton";                        //改变标签名

                var img = document.getElementsByTagName("img")[0];           //获取img删除
                img.parentNode.removeChild(img);                             //删除

                var jsimg = document.getElementsByClassName("jsimg")[0];     //获取img父元素
                img = document.createElement("img");                         //创建新img元素
                img.src = "JavaScript-handbook/img (" + (i + 1) + ").jpg"    //调整新元素src
                jsimg.appendChild(img);                                      //插入img
            }
        })
    }
}