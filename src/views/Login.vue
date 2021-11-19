<template>
  <div class="login-container">
    <el-form :rules="rules" ref="formRef" :model="loginForm" class="login-form">
      <el-form-item>
        <h3 class="title">系统登录</h3>
      </el-form-item>
      <el-form-item prop="account">
        <el-input
          placeholder="请输入用户名"
          v-model="loginForm.account"
          clearable
          autofocus
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          type="password"
          @keyup.enter="onLogin()"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin()">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="reg" type="text" @click="toRegister"
          >立即注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import request from "@/utils/request";
import { ref, reactive, defineComponent } from "vue";

interface DataType {
  account: string;
  password: string;
  login_type: number;
}

export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();

    const loginForm = reactive<DataType>({
      account: "",
      password: "",
      login_type: 0,
    });

    const rules = {
      account: [
        { required: true, message: "用户名不能为空", trigger: "blur" },
        { min: 3, max: 10, message: "用户名3到10位", trigger: "blur" },
      ],
      password: [
        { required: true, message: "密码不能为空", trigger: "blur" },
        { min: 6, max: 20, message: "密码6到20位", trigger: "blur" },
      ],
    };

    const formRef = ref();

    const onLogin = () => {
      formRef.value.validate((valid: boolean) => {
        if (valid) {
          request({
            url: "v1/token",
            method: "post",
            data: loginForm,
          })
            .then((response) => {
              // console.log(response);
              console.log(store.state.routerParams);
              store.commit("changeView", {
                routerParams: {
                  name: "Home",
                },
              });
              console.log(store.state.routerParams);
              store.commit("setToken", {
                token: response.data.token,
              });
              store.commit("setUserName", {
                userName: response.data.userName,
              });
            })
            .catch((error) => console.log(error));
        } else {
          console.log("验证失败");
          return false;
        }
      });
    };

    const toRegister = () => {
      store.commit("changeView", {
        routerParams: {
          name: "Register",
        },
      });
    };

    return {
      formRef,
      loginForm,
      rules,
      onLogin,
      toRegister,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.el-input {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}
.el-button {
  width: 100%;
  margin-top: 5px;
}
.login-form {
  background-color: #40a0ffa1;
  position: absolute;
  width: 350px;
  margin: auto; /* 上下间距10px，左右自动居中*/
  padding: 30px;
  border-radius: 20px; /* 圆角 */
  top: 20%;
  left: 50%;
}
.reg {
  color: white;
}
.title {
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;
}
</style>
