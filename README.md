/、
# Vue脚手架
## ref属性
1. 用来给元素或者子组件注册引用信息(id的替代者)
2. 应用在*html*标签上获取的是真实的DOM元素，应用在*组件标签*上是组件实例对象(vc)
3. 使用方式
    * 打标识: ```<h1 ref="xxx">....</h1>``` 或者 ```<School ref="xxx"></School>```
    * 获取: ```this.$refs.xxx```

## props配置项
1. 功能：让组件接受外部传过来的数据
2. 传递数据：```<Demo name:"xxx"/>```
3. 接受方式：
    1. 第一种（只接收）: ```props['name']```
    2. 第二种（限制类型）: ```props{name:String}```
    3. 第三种（限制类型，必要性，指定默认值） :
        ``` js props:{
            name:{
                type:String, //类型
                required:true, //必要性
                default:'张三' //默认值
            }
        } 
        ```
    > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

















# 一级标题
## 二级标题
###### 六级标题
> 这是一个有两段的块引用。这是第一段。
>
> 引用文字

## 无序列表
+ 1 
+ 2
+ 3
* 4
- 5

# 有序列表
1. red
2. green
3. skyblue

- [x] 任务列表项
- [ ] 未完成任务
- [x] 已完成任务

## 代码块
```
    function(){}
```

## 语法高亮
``` ruby 
 require 'redcarpet'
```

## 表格
| first Header | Second Header|
| ------------ | ------------ |
| content      | content      |
| content2     | content2     |

## 脚注
[^footnote]: Here is the *text* of the **footnote**.

[^foot]: text footnote

***
## 链接
This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.



---


[id]: http://example.com/  "Optional Title Here"
[id]: http:www.baidu.com
---
<http://www.baidu.com>

# vue_cli


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
