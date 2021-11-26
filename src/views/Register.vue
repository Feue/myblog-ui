<template>
  <div class="register-container">
    <el-form
      :rules="rules"
      ref="formRef"
      :model="registerForm"
      class="register-form"
    >
      <el-form-item>
        <h3 class="title">注册</h3>
      </el-form-item>
      <el-form-item prop="nickname">
        <el-input
          placeholder="请输入用户名"
          v-model="registerForm.nickname"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="registerForm.password"
          type="password"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPassword">
        <el-input
          placeholder="请再次输入密码"
          v-model="registerForm.checkPassword"
          type="password"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入邮箱"
          v-model="registerForm.email"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入手机号"
          v-model="registerForm.mobile"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onRegister">注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" @click="toLogin">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "@vue/runtime-core";
import request from "@/utils/request";
import { useStore } from "vuex";

export default defineComponent({
  name: "Register",
  setup() {
    const store = useStore();
    const formRef = ref();
    const registerForm = reactive({
      nickname: "",
      password: "",
      checkPassword: "",
      email: "",
      mobile: "",
    });
    const validatePassword = (rule: any, value: any, callback: Function) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 20) {
        callback(new Error("密码6到20位"));
      } else {
        if (registerForm.checkPassword !== "") {
          formRef.value.validateField("password2");
        }
        callback();
      }
    };
    const validateCheckPassword = (
      rule: any,
      value: any,
      callback: Function
    ) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const rules = {
      nickname: [
        { required: true, message: "用户名不能为空", trigger: "blur" },
        { min: 3, max: 10, message: "用户名3到10位", trigger: "blur" },
      ],
      password: [{ validator: validatePassword, trigger: "blur" }],
      checkPassword: [{ validator: validateCheckPassword, trigger: "blur" }],
    };

    const onRegister = () => {
      formRef.value.validate((valid: Boolean) => {
        if (valid) {
          request({
            url: "/v1/user/register",
            method: "post",
            data: registerForm,
          })
            .then((response) => {
              store.commit("changeView", {
                routerParams: {
                  name: "Login",
                },
              });
            })
            .catch((error) => console.log(error));
        } else {
          console.log("验证失败");
          return false;
        }
      });
    };

    const toLogin = () => {
      store.commit("changeView", {
        routerParams: {
          name: "Login",
        },
      });
    };

    return {
      formRef,
      registerForm,
      rules,
      onRegister,
      toLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
.register-container {
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
.register-form {
  background-color: #40a0ffa1;
  position: absolute;
  width: 350px;
  margin: auto;
  padding: 30px;
  border-radius: 20px; /* 圆角 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  font-size: 26px;
  color: #eee;
  margin: 0 auto 20px auto;
  text-align: center;
  font-weight: 700;
}
</style>
