// h5画布提示
        /** @type{HTMLCanvasElement}*/
 
        // 获取画布
        var canvas = document.getElementsByTagName('canvas')[0]
        var context = canvas.getContext('2d')
 
        // 设置画布大小 window的宽度和高度用两个变量存起来
        var w = window.innerWidth;
        var h = window.innerHeight;
 
        // 把变量赋值给画布的宽度和高度，现在画布的的大小就是窗口的大小
        canvas.width = w;
        canvas.height = h;
 
        // 雪花的基本信息
        // 存放雪花数量
        var num = 400;
        // 定义空数组，存放雪花的信息，比如半径，位置等
        var snows = []
        for(var i = 0;i < num;i++){
            //push():在数组末尾添加一个或多个数据
            snows.push({
                // 存放雪花坐标 使用随机数*window的宽度，这样雪花就只会在这个宽度中
                x:Math.random() * w,
                y:Math.random() * h,
                // 雪花的半径 半径越大雪花越大
                r:Math.random() * 5 +1,
            })
        }
        // 雪花飘落的运动函数
        var move = () => {
            for(var i = 0;i < num;i++){
                var snow = snows[i];
                // 要让雪花动起来就是要修改雪花的位置，也就是x,y
                // 随机数 可以自己调
                snow.x += Math.random()*2 + 1;
                snow.y += Math.random()*2 + 1;
                // 控制边界问题，防止溢出
                // 如果雪花的x大于窗口的x
                if(snow.x > w){
                    // 把x设为0
                    snow.x = 0
                }
                if(snow.y > h){
                    snow.y = 0
                }
            }
        }
 
        // draw函数，把雪花画到画布上面
        var draw = () => {
            context.clearRect(0,0,w,h)
            //beginPath:开始一条新的路径（路径开始点）
            context.beginPath();
 
            // fillStyle:设置填充绘画的颜色
            context.fillStyle = 'rgb(255,255,255)'
            context.shadowColor = 'rgb(255,255,255)'
            // 表示模糊等级
            context.shadowBlur = 4;
 
            // 画雪花
            for(var i = 0;i < num;i++){
                var snow = snows[i];
                context.moveTo(snow.x,snow.y);
                // 圆 arc()方法创建圆或部分圆
                context.arc(snow.x,snow.y,snow.r,0,Math.PI*2);
            }
            
            context.fill();
            // 关闭，结束画画的步骤
            context.closePath();
            // 执行运动函数
            move();
        }
        // 执行函数
        draw()
        // 在加一个定时器，这样雪花就实现自动飘落了
        // 每隔30毫秒执行一次
        setInterval(draw,30)