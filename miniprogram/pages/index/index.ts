Component({
  methods: {
    login() {
      wx.login({
        success: (res) => {
          console.log("res", res);
          const code = res.code;

          wx.request({
            url: "http://47.121.138.88:8081/wish/user/login",
            method: "POST",
            data: {
              code: code,
            },
            success: (res) => {
              console.log("login callback", res);
            },
            fail: (err) => {
              console.error("login error", err);
            },
          });
        },
      });
    },
  },
});
