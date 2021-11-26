<template>
  <el-descriptions title="User Info" column="1">
    <el-descriptions-item label="昵称:">Feue_</el-descriptions-item>
    <el-descriptions-item label="电话:">13012118148</el-descriptions-item>
    <el-descriptions-item label="邮箱:">fengjj6@qq.com</el-descriptions-item>
    <el-descriptions-item label="个性签名:">
      <el-tag size="small">
        寒日如纱，伴着天边寥寂的星空，诗词如画，刻着别味非凡的心境。
      </el-tag>
    </el-descriptions-item>
  </el-descriptions>
  <el-space wrap>
    <el-button type="warning" size="small" @click="dialogVisible = true" round
      >修改密码</el-button
    >
    <el-button type="danger" size="small" @click="logout" round
      >退出登录</el-button
    >
  </el-space>
  <el-dialog v-model="dialogVisible" fullscreen center>
    <el-form ref="formRef" :model="form" :rules="rules" size="mini">
      <el-form-item prop="oldPassword">
        <el-input
          v-model="form.oldPassword"
          placeholder="原密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item prop="newPassword">
        <el-input
          v-model="form.newPassword"
          placeholder="新密码"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="warning" size="mini" @click="changePassword"
        >提交</el-button
      >
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref, reactive } from "@vue/runtime-core";
import request from "@/utils/request";

export default defineComponent({
  name: "Profile",
  setup() {
    const store = useStore();
    const dialogVisible = ref(false);
    const formRef = ref();
    const form = reactive({
      oldPassword: "",
      newPassword: "",
    });
    const rules = {
      oldPassword: [
        { required: true, message: "请填写原密码", trigger: "blur" },
      ],
      newPassword: [
        { required: true, message: "原密码必须填写", trigger: "blur" },
        { min: 6, max: 20, message: "密码长度6-20", trigger: "blur" },
      ],
    };

    const logout = () => {
      console.log("logout");
      store.commit("changeView", {
        routerParams: {
          name: "Login",
        },
      });
      store.commit("setToken", {
        token: "",
      });
    };

    const changePassword = () => {
      formRef.value.validate((valid: Boolean) => {
        if (valid) {
          request({
            url: "",
            method: "post",
            data: form,
          })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        } else {
          console.log("校验失败");
          return false;
        }
      });
    };

    return {
      dialogVisible,
      formRef,
      form,
      rules,
      logout,
      changePassword,
    };
  },
});
</script>

<style lang="scss" scoped></style>
