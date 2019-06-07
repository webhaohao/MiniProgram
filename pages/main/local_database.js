var local_database = [{
    "name": "1. 清华大学的校训是？（看清再选，不是北大的哦）",
    "daan": "0",  
    "content": [
      {
        "option":"自强不息，厚德载物",
        "pic":""
      },
      {
        "option":"思想自由，兼容并包",
        "pic":""
      }
    ],
    "select":"-1",
    "intrPic":"../images/intr9.jpg",
    "animated":true
  },
  {
    "name": "2. 二校门是清华大学著名的网红打卡地。 请问“清华园”三个字是谁提的？",
    "daan": "0",
    "content": [
      {
        "option": "那桐（清朝宣统年间军机大臣）",
        "pic":""
      },
      {
        "option": "梅贻琦（清华大学校长（1931-1948）",
        "pic":""
      },
      {
        "option": "闻一多（清华大学校友、清华大学中文系教授）",
        "pic":""
      }
    ], 
    "select":"-1",
    "intrPic":"../images/intr1.jpg",
    "animated":false 
  },
  {
    "name": "3. 今年是清华大学经济管理学院建院35周年，朱镕基为首任院长，学院的使命是？",
    "daan": "0",
    "content": [
       {"option":"创造知识、培育领袖、贡献中国、<br>影响世界", 
        "pic" :""
       },
       {"option":"成为世界一流的经济管理学院", 
        "pic" :""
       }
      
    ],
    "select":"-1",
    "intrPic":"../images/intr2.jpg",
    "animated":false 
  },
  {
    "name":"4. 在清华，你将始终与大师同行。马克·扎克伯格就曾在2015年走进过清华经管EMBA的课堂。请问他在哪里创办的脸书（Facebook）？",
    "daan":"3",
    "content": [
        {"option": "硅谷互联网创新实验室", 
        "pic" :""
        },
        {"option": "哈佛大学本科宿舍楼", 
        "pic" :""
        },  
        {"option": "中关村创业大街咖啡馆", 
        "pic" :""
        }, 
        {"option": "清华经管学院舜德楼301教室", 
        "pic" :""
        }
      ],
    "intrPic":"../images/intr3.jpg",
    "select":"-1",
    "animated":false 
  },
  {
    "name":"5. 一直以来，清华经管EMBA的同学都有“最严谨、最能学”的江湖称号。以下哪种笔记属于EMBA同学的风格：",
    "daan":"2",
    "content": [
          {"option": "", 
            "pic" :"../images/option1.jpg"
          },
          {"option": "", 
          "pic" :"../images/option2.jpg"
          }, 
          {"option": "", 
          "pic" :"../images/option3.jpg"
          }, 
    ],
    "select":"-1" ,
    "animated":false
  },
  {
    "name":'<div>6. “无体育、不清华”是清华源远流长的精神，“学以致用”是清华经管EMBA的传统。以下哪种情况<b>不会是</b>EMBA同学上课后发生的？</div>',
    "daan":"2",
    "content": [
      {
          "option": "每天跑步5km起，朋友圈打卡，见面先问配速问题",
          "pic":""
      },
      {
        "option": "企业里的每周例会变成了“我在清华上课时，老师曾经说过…",
        "pic":""
      },
      {
        "option": "吃吃喝喝好快乐，千杯不醉就是我",
        "pic":""
      }
    ],
    "select":"-1",
    "animated":false 
  },
  {
    "name":"7. 未来科技EMBA旨在培养掌握核心技术、引领中国未来、贡献人类社会的科技型战略企业家。项目的招生对象是？",
    "daan":"4",
    "content": [
      {
        "option":"中国制造领军者",
        "pic":"../images/person1.jpg"
      },
      {
        "option":"科技驱动创始人",
        "pic":"../images/person2.jpg"
      },
      {
        "option":"转型升级企业家",
        "pic":"../images/person3.jpg"
      },
      {
        "option":"创新领域投资人",
        "pic":"../images/person4.jpg"
      },
      {
        "option":"以上都是",
        "pic":""
      }
    ],
    "select":"-1",
    "animated":false 
  }
  ]
  module.exports = {
    postList: local_database
  }