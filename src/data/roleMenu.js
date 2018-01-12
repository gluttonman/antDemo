


/**
 * Created by Lijun on 2018/1/12.
 */
import Mock from "mockjs"

let data = [{
        "children": [{
            "href": "/dsideal_yy/yx/html/zypb/zypbPage.html",
            "isLeaf": true,
            "menuId": 342,
            "nodeName": "评比活动管理",
            "children":[
                {
                "href": "/dsideal_yy/yx/html/zypb/zypbPage.html",
                "isLeaf": true,
                "menuId": 3421,
                "nodeName": "评比活动管理1",
                },
                {
                    "href": "/dsideal_yy/yx/html/zypb/zypbPage.html",
                    "isLeaf": true,
                    "menuId": 3422,
                    "nodeName": "评比活动管理2",
                },
                {
                    "href": "/dsideal_yy/yx/html/zypb/zypbPage.html",
                    "isLeaf": true,
                    "menuId": 3423,
                    "nodeName": "评比活动管理2",
                }
            ],
        }, {
            "href": "/dsideal_yy/yx/html/zypb/excellentWorkPage.html",
            "isLeaf": true,
            "menuId": 343,
            "nodeName": "作品推优"
        }, {
            "href": "/dsideal_yy/yx/html/zypb/areaZypbPage.html",
            "isLeaf": true,
            "menuId": 401,
            "nodeName": "区(县)评比活动管理"
        }, {
            "href": "/dsideal_yy/yx/html/zypb/areaExcellentWorkPage.html",
            "isLeaf": true,
            "menuId": 402,
            "nodeName": "区(县)作品推优"
        }, {
            "href": "/dsideal_yy/yx/html/zypb/areaZypbUploadPage.html",
            "isLeaf": true,
            "menuId": 455,
            "nodeName": "参与评比"
        }],
        "href": "#yx",
        "menuId": 454,
        "nodeName": "资源评比"
    }, {
        "children": [{
            "href": "/dsideal_yy/yx/html/resource/resourcePage.html",
            "isLeaf": true,
            "menuId": 3576,
            "nodeName": "我的资源"
        }, {
            "href": "/dsideal_yy/yx/html/hd/hdPage2.html",
            "isLeaf": true,
            "menuId": 3574,
            "nodeName": "我的直播"
        }, {
            "href": "/dsideal_yy/yx/html/video/videoPage.html",
            "isLeaf": true,
            "menuId": 3577,
            "nodeName": "我的好课"
        }, {
            "href": "/dsideal_yy/yx/html/video/videoPage2.html",
            "isLeaf": true,
            "menuId": 3578,
            "nodeName": "我的讲座"
        }, {
            "href": "/dsideal_yy/yx/html/qnpaper/qnpaperCurrPage.html",
            "isLeaf": true,
            "menuId": 3579,
            "nodeName": "问卷调查"
        }],
        "href": "#yx",
        "menuId": 465,
        "nodeName": "教学研究"
    }]


Mock.mock ("/yx/roleMenus",data)