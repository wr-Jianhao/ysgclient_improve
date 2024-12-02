<template>
  <div
    style="
      background: rgba(240, 242, 245, 1);
      width: 100%;
      height: 98vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      overflow: hidden;
    "
  >
    <HeaderBar />
    <div class="background">
      <el-row>
        <el-col style="margin-left: 600px; margin-top: 100px">
          <p
            v-if="
              currentLoginMethod === 'password' ||
              currentLoginMethod === 'phone' ||
              currentLoginMethod === 'wechat'
            "
            class="title-text"
          >
            LOGIN TO THE SYSTEM
          </p>
          <p v-else-if="currentLoginMethod === 'register'" class="title-text">
            REGISTER AN ACCOUNT
          </p>
          <p v-else-if="currentLoginMethod === 'forgot'" class="title-text">
            RETRIEVE PASSWORD
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="margin-left: 600px">
          <p
            v-if="
              currentLoginMethod === 'password' ||
              currentLoginMethod === 'phone' ||
              currentLoginMethod === 'wechat'
            "
            class="sub-title-text"
          >
            欢迎来到彝创通知识产权交易平台
          </p>
          <p
            v-else-if="currentLoginMethod === 'register'"
            class="sub-title-text"
          >
            注册账号
          </p>
          <p v-else-if="currentLoginMethod === 'forgot'" class="sub-title-text">
            忘记密码
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="margin-left: 600px">
          <div class="login-tabs">
            <button
              :class="{
                active: currentLoginMethod === 'password',
              }"
              @click="setLoginMethod('password')"
            >
              密码登录
            </button>
            <button
              :class="{ active: currentLoginMethod === 'phone' }"
              @click="setLoginMethod('phone')"
            >
              手机号登录
            </button>
            <button
              :class="{ active: currentLoginMethod === 'wechat' }"
              @click="setLoginMethod('wechat')"
            >
              微信登录
            </button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="margin-left: 1200px">
          <!-- 密码登录表单 -->
          <el-form v-if="currentLoginMethod === 'password'" class="login-form">
            <div class="one-line">
              <span class="under-text-1">用户名</span>
            </div>
            <el-input
              v-model="usernameInput"
              placeholder="请输入用户名"
              type="text"
              class="input-form"
            ></el-input>
            <div class="one-line">
              <span class="under-text-1">登录密码</span>
            </div>
            <el-input
              v-model="passwordInput"
              placeholder="请输入密码"
              type="password"
              class="input-form"
            ></el-input>
            <div class="one-line">
              <el-checkbox
                style="
                  margin-top: 0;
                  border: none;
                  background-color: transparent;
                  color: white;
                "
              >
                <span class="under-text-2">记住密码</span>
              </el-checkbox>
              <span class="under-text-2">注册账号</span>
            </div>
            <el-button
              type="primary"
              style="
                border-radius: 3.33px;
                background: rgba(147, 118, 222, 1);
                border: none;
                margin-top: 20px;
              "
              @click="login"
            >
              <span> 确认登录 </span>
            </el-button>

            <div style="margin-top: 10px; text-align: center">
              <span class="under-text-2" @click="setLoginMethod('forgot')">
                忘记密码 |
              </span>
              <span class="under-text-2" @click="setLoginMethod('register')"
                >注册账号</span
              >
            </div>
          </el-form>
          <el-form v-if="currentLoginMethod === 'phone'" class="login-form">
            <div class="one-line">
              <span class="under-text-1">手机号</span>
            </div>
            <el-input
              v-model="phoneInput"
              placeholder="请输入手机号"
              type="text"
              class="input-form"
            ></el-input>
            <div class="one-line">
              <span class="under-text-1">验证码</span>
            </div>
            <el-input
              v-model="confirmCode"
              placeholder="请输入验证码"
              type="text"
              class="input-form"
            >
              <template #append>
                <el-button type="primary" size="small" @click="sendSMS">
                  获取验证码
                </el-button>
              </template>
            </el-input>

            <el-button
              type="primary"
              style="
                border-radius: 3.33px;
                background: rgba(147, 118, 222, 1);
                border: none;
                margin-top: 20px;
              "
              @click="login"
            >
              <span> 确认登录 </span>
            </el-button>
            <div style="margin-top: 10px; text-align: center">
              <span class="under-text-2" @click="setLoginMethod('register')"
                >注册账号</span
              >
            </div>
          </el-form>
          <!-- 社交账户登录信息 -->
          <div v-if="currentLoginMethod === 'wechat'">
            <div>
              <p
                style="
                  font-size: 25.31px;
                  font-weight: 400;
                  letter-spacing: 14.67px;
                  line-height: 33.75px;
                  color: rgba(231, 180, 240, 1);
                  text-align: center;
                  vertical-align: top;
                  padding-top: 20px;
                "
              >
                微信快捷登录
              </p>
            </div>
          </div>
          <div v-else-if="currentLoginMethod === 'register'">
            <div>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">账号</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="usernameInput"
                  placeholder="请输入帐号"
                  type="text"
                  class="input-form"
                >
                </el-input>
              </el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">邮箱</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="email"
                  placeholder="请输入邮箱"
                  type="text"
                  class="input-form"
                >
                </el-input>
              </el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">登录密码</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="registerPassword"
                  placeholder="请输入密码"
                  type="text"
                  class="input-form"
                >
                </el-input>
              </el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">确认密码</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="confirmPassword"
                  placeholder="请输入密码"
                  type="text"
                  class="input-form"
                >
                </el-input>
              </el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">手机号</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="phoneInput"
                  placeholder="请输入手机号"
                  type="text"
                  class="input-form"
                >
                </el-input>
              </el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">短信验证码</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="confirmCode"
                  placeholder="请输入验证码"
                  type="text"
                  class="input-form"
                >
                  <template #append>
                    <el-button type="primary" size="small" @click="sendSMS">
                      获取验证码
                    </el-button>
                  </template>
                </el-input>
              </el-row>
              <el-button
                type="primary"
                style="
                  border-radius: 3.33px;
                  background: rgba(147, 118, 222, 1);
                  border: none;
                  margin-top: 20px;
                  width: 20%;
                "
                @click="registerPhone"
              >
                <span> 确认注册 </span>
              </el-button>
            </div>
          </div>
          <div v-else-if="currentLoginMethod === 'forgot'">
            <div style="margin-left: 20px; padding-top: 15px">
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">账号</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="usernameInput"
                  placeholder="请输入帐号"
                  type="text"
                  class="input-form"
                ></el-input>
              </el-row>

              <el-row>
                <div class="one-line">
                  <span class="under-text-1">手机号</span>
                </div>
              </el-row>
              <el-row>
                <el-input
                  v-model="phoneInput"
                  placeholder="请输入手机号"
                  type="text"
                  class="input-form"
                ></el-input
              ></el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">短信验证码</span>
                </div></el-row
              >
              <el-row>
                <el-input
                  v-model="confirmCode"
                  placeholder="请输入验证码"
                  type="text"
                  class="input-form"
                ></el-input>
              </el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">新的密码</span>
                </div></el-row
              >
              <el-row>
                <el-input
                  v-model="passwordInput"
                  placeholder="请输入密码"
                  type="password"
                  class="input-form"
                ></el-input
              ></el-row>
              <el-row>
                <div class="one-line">
                  <span class="under-text-1">确认密码</span>
                </div></el-row
              >
              <el-row>
                <el-input
                  v-model="usernameInput"
                  placeholder="请输入帐号"
                  type="text"
                  class="input-form"
                ></el-input>
              </el-row>
              <el-button
                type="primary"
                style="
                  border-radius: 3.33px;
                  background: rgba(147, 118, 222, 1);
                  border: none;
                  margin-top: 20px;
                  width: 20%;
                "
              >
                <span> 确认 </span>
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/Header/index.vue";
import { getHeaderData } from "@/components/Header/utils/data";
import { ref } from "vue";
import apiClient from "@/utils/request";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "LoginPage",
  components: {
    HeaderBar,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const usernameInput = ref("");
    const passwordInput = ref("");
    const email = ref("");
    const currentLoginMethod = ref("password"); // 默认选中密码登录
    const phoneInput = ref("");
    const registerPassword = ref("");
    const confirmPassword = ref("");
    const forgotPhone = ref("");
    const confirmCode = ref("");
    const message = ref("");

    const setLoginMethod = (method) => {
      currentLoginMethod.value = method;
      phoneInput.value = "";
      registerPassword.value = "";
      confirmPassword.value = "";
      forgotPhone.value = "";
      confirmCode.value = "";
      message.value = "";
      passwordInput.value = "";
    };
    const login = async () => {
      try {
        if (currentLoginMethod.value === "password") {
          const request = await apiClient.post(
            "/ipr/auth/login/usernamePassword",
            {
              username: usernameInput.value,
              password: passwordInput.value,
            },
          );

          message.value = request.data.msg;
          if (
            message.value === "登录成功" ||
            message.value === "您当前已登录，已登录用户不允许重复登录注册"
          ) {
            store.commit("SET_USER_STATE", true);
            store.commit("SET_USER_USERNAME", usernameInput.value);
            store.commit("SET_USER_PASSWORD", passwordInput.value);
            console.log(request);
            router.push("/user"); // 确保在状态更新后再路由跳转
          } else {
            alert(message.value);
          }
        } else if (currentLoginMethod.value === "phone") {
          const request = await apiClient.post("/ipr/auth/login/mobileVcode", {
            mobile: phoneInput.value,
            vcode: confirmCode.value,
          });
          message.value = request.data.msg;
          console.log("phone login");
          if (
            message.value === "登录成功" ||
            message.value === "您当前已登录，已登录用户不允许重复登录注册"
          ) {
            store.commit("SET_USER_STATE", true);
            store.commit("SET_USER_USERNAME", usernameInput.value);
            store.commit("SET_USER_PASSWORD", passwordInput.value);

            router.push("/user"); // 确保在状态更新后再路由跳转
          } else {
            alert(message.value);
          }
        } else {
          console.log("wechat login");
        }
      } catch (error) {
        console.error("登录请求失败", error);
        alert("登录失败，请稍后重试");
      }
    };
    const registerPhone = async () => {
      try {
        const request = await apiClient.post("/ipr/auth/register/new", {
          username: usernameInput.value,
          mobile: phoneInput.value,
          email: email.value,
          password: registerPassword.value,
          password2: confirmPassword.value,
          vcode: confirmCode.value,
        });
        message.value = request.data.msg;
        if (message.value === "新用户注册成功!") {
          store.commit("SET_USER_STATE", true);
          store.commit("SET_USER_USERNAME", usernameInput.value);
          store.commit("SET_USER_PASSWORD", passwordInput.value);

          router.push("/user");
        } else {
          alert(message.value);
        }
      } catch (error) {
        console.error("注册请求失败", error);
        alert("注册失败，请稍后重试");
      }
    };
    const sendSMS = async () => {
      try {
        const request = await apiClient.post("/ipr/auth/SMS/sendSMSCode", {
          mobile: phoneInput.value,
        });
        message.value = request.data.msg;
        if (message.value === "验证码发送成功") {
          console.log(request);
          alert(message.value);
        } else {
          alert(message.value);
        }
      } catch (error) {
        console.error("发送验证码请求失败", error);
        alert("发送验证码失败，请稍后重试");
      }
    };
    return {
      usernameInput,
      passwordInput,
      currentLoginMethod,
      setLoginMethod,
      phoneInput,
      registerPassword,
      forgotPhone,
      confirmCode,
      login,
      email,
      registerPhone,
      confirmPassword,
      sendSMS,
    };
  },
  data() {
    return {
      headerList: [],
    };
  },
  created() {
    // console.log(this.$store.state.isLoggedIn)
    const headerData = getHeaderData();
    this.headerList = headerData.headerList;
  },
};
</script>

<style scoped>
.title-text {
  height: 32px;
  opacity: 1;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 31.82px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  padding: 0;
  vertical-align: top;
}
.sub-title-text {
  padding: 0;
  height: 27px;
  opacity: 1;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 26.52px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
}
.one-line {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  justify-content: space-between;
}
.under-text-1 {
  font-size: 10.67px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 14.14px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.under-text-2 {
  font-size: 10.67px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 14.14px;
  margin-top: 10px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.input-form {
  width: 300px;
  margin-top: 10px;
  border-radius: 3.33px;
  border: 0.67px solid rgba(0, 0, 0, 1);
  color: black;

  background-color: rgba(19, 12, 26, 1); /* 确保这里没有被覆盖 */
}
.content-div {
  margin-top: 20px;
  text-align: center;
  width: 340px;
  height: 356px;
  opacity: 1;
  border-radius: 27.33px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
:v-deep(.input-form .el-input__inner) {
  background-color: rgba(19, 12, 26, 1); /* 替换为你想要的颜色 */
  width: 300px;
  height: 30px;
}

:v-deep(.input-form .el-input__inner::placeholder) {
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 20.27px;
  color: rgba(51, 51, 51, 1);
  text-align: left;
  vertical-align: top;
}

.login-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.login-tabs button {
  background: transparent;
  border: none;
  color: rgba(51, 51, 51, 1);
  padding: 10px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s;
}
.login-tabs button.active {
  color: blue;
}
.login-tabs button:not(.active):hover {
  border-color: rgba(255, 255, 255, 0.7);
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  margin-top: 10px;
}
.background {
  background: url("@/assets/login_background.png") no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
}
</style>
