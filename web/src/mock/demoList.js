export default {
  'get|/api/index/getCarousel': option => {
    return {
      status: 200,
      message: 'success',
      data: [
        {
          src:
            "https://bbs.sangfor.com.cn/data/attachment/plugin/114555to6ko9m3o6klkko1.png",
          id: "1111"
        },
        {
          src:
            "https://bbs.sangfor.com.cn/data/attachment/plugin/192141vytce6l0h0lwchdl.png",
          id: "2222"
        },
        {
          src:
            "https://bbs.sangfor.com.cn/data/attachment/plugin/112935by1kd5i2mkerzk9g.png",
          id: "333"
        }
      ]
    };
  },
  'get|/api/index/getNews': option => {
    return {
      status: 200,
      message: 'success',
      data: [
        {
          id: "1111",
          img:
            "https://news.rakwireless.com.cn/content/images/size/w1000/2020/11/The-app.png",
          title: "顺势而为：为什么我们从一开始就相信Helium做的是对的",
          author: "Helium blockchain",
          releaseTime: "10个月前"
        },

        {
          id: "33333",
          img:
            "https://news.rakwireless.com.cn/content/images/size/w1000/2020/11/The-app.png",
          title: "顺势而为：为什么我们从一开始就相信Helium做的是对的",
          author: "Helium blockchain",
          releaseTime: "10个月前"
        },
        {
          id: "44444",
          img:
            "https://news.rakwireless.com.cn/content/images/size/w1000/2020/11/The-app.png",
          title: "顺势而为：为什么我们从一开始就相信Helium做的是对的",
          author: "Helium blockchain",
          releaseTime: "10个月前"
        },
        {
          id: "55555",
          img:
            "https://news.rakwireless.com.cn/content/images/size/w1000/2020/11/The-app.png",
          title: "顺势而为：为什么我们从一开始就相信Helium做的是对的",
          author: "Helium blockchain",
          releaseTime: "10个月前"
        },
        {
          id: "66666",
          img:
            "https://news.rakwireless.com.cn/content/images/size/w1000/2020/11/The-app.png",
          title: "顺势而为：为什么我们从一开始就相信Helium做的是对的",
          author: "Helium blockchain",
          releaseTime: "10个月前"
        },
        {
          id: "77777",
          img:
            "https://news.rakwireless.com.cn/content/images/size/w1000/2020/11/The-app.png",
          title: "顺势而为：为什么我们从一开始就相信Helium做的是对的",
          author: "Helium blockchain",
          releaseTime: "10个月前"
        }
      ]
    }
  },
  'post|/api/register': option => {
    return {
      status: 200,
      message: 'success'
      //success 成功
      // error 失败
    }
  },
};
