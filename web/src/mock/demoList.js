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
  }
};
